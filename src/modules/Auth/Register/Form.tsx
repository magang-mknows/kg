import Button from "@/components/Common/Button";
import ControlledCheckboxField from "@/components/ControlledInputs/ControlledCheckboxField";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Form from "@/components/Form";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "@/hooks/Auth/useRegister";
import { AuthPayloadTypes } from "@/utilities/types/Auth";
import { handleError } from "@/utilities/helper";
import DashedText from "@/components/Common/DashedText";

const RegisterForm: FC = (): ReactElement => {
  const validationSchema = z
    .object({
      fullname: z.string().min(1, { message: "Nama lengkap harus diisi" }),
      email: z.string().min(1, { message: "Email harus diisi" }).email({
        message: "Email harus valid",
      }),
      password: z.string().min(6, { message: "Password setidaknya harus 6 karakter" }),
      confirm_password: z.string().min(1, { message: "Konfirmasi password harus diisi" }),
      terms: z.literal(true, {
        errorMap: () => ({ message: "Terms dan Condition Harus disetujui" }),
      }),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Password tidak sesuai",
      path: ["confirm_password"],
    });

  const { mutate, isLoading } = useRegister();

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      fullname: "",
      terms: undefined,
    },
  });

  const onSubmit = handleSubmit((data: AuthPayloadTypes) => {
    try {
      mutate(data);
    } catch (err) {
      throw handleError(err);
    }
  });

  return (
    <Form onSubmit={onSubmit}>
      <ControlledTextField
        control={control}
        type={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Masukan Email Anda"}
        required
      />
      <ControlledTextField
        control={control}
        type={"text"}
        label={"Nama Lengkap"}
        name={"fullname"}
        placeholder={"Masukan Nama Lengkap Anda"}
        required
      />
      <ControlledTextField
        control={control}
        type={"password"}
        label={"Password"}
        name={"password"}
        placeholder={"*********"}
        required
      />
      <ControlledTextField
        control={control}
        type={"password"}
        label={"Confirm Password"}
        name={"confirm_password"}
        placeholder={"*********"}
        required
      />
      <ControlledCheckboxField
        control={control}
        name={"terms"}
        label={"Saya setuju dengan syarat dan ketentuan."}
      />
      <div className="flex flex-col w-full my-8">
        <Button
          disabled={!isValid}
          className="my-4 w-full disabled:bg-gray-400 disabled:text-gray-200 bg-blue-600 text-white font-bold p-3 text-1xl rounded-md"
          text={isLoading ? "Sedang Memuat..." : "Daftar"}
          type={"submit"}
        />

        <DashedText />

        <Button
          className="my-4 w-full disabled:bg-gray-400 disabled:text-gray-200 bg-blue-600 text-white font-bold p-3 text-1xl rounded-md"
          text={isLoading ? "Sedang Memuat..." : "Daftar Dengan Google"}
          type={"button"}
        />
      </div>
    </Form>
  );
};

export default RegisterForm;
