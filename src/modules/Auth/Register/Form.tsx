import Button from "@/components/Common/Button";
import ControlledCheckboxField from "@/components/ControlledInputs/ControlledCheckboxField";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Form from "@/components/Form";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "@/hooks/Auth/useRegister";
import DashedText from "@/components/Common/DashedText";

const RegisterForm: FC = (): ReactElement => {
  const validationSchema = z
    .object({
      full_name: z.string().min(1, { message: "Nama lengkap harus diisi" }),
      user_name: z.string().min(1, { message: "Nama lengkap harus diisi" }),
      email: z.string().min(1, { message: "Email harus diisi" }).email({
        message: "Email harus valid",
      }),
      password: z.string().min(6, { message: "Password setidaknya harus 6 karakter" }),
      password_confirmation: z.string().min(1, { message: "Konfirmasi password harus diisi" }),
      terms: z.literal(true, {
        errorMap: () => ({ message: "Terms dan Condition Harus disetujui" }),
      }),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: "Password tidak sesuai",
      path: ["password_confirmation"],
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
      password_confirmation: "",
      full_name: "",
      user_name: "",
      terms: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <Form onSubmit={onSubmit}>
      <ControlledTextField
        control={control}
        type={"text"}
        label={"Nama Lengkap"}
        name={"fullname"}
        placeholder={"Masukan Nama Lengkap"}
        required
      />
      <ControlledTextField
        control={control}
        type={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Masukan Email"}
        required
      />

      <ControlledTextField
        control={control}
        type={"password"}
        label={"Kata Sandi"}
        name={"password"}
        placeholder={"Masukan Kata Sandi"}
        required
      />
      <ControlledTextField
        control={control}
        type={"password"}
        label={"Konfirmasi Kata Sandi"}
        name={"confirm_password"}
        placeholder={"Konfirmasi Kata Sandi"}
        required
      />
      <ControlledCheckboxField
        control={control}
        name={"terms"}
        label={"Saya setuju dengan syarat & ketentuan"}
      />
      <div className="flex flex-col w-full my-8">
        <Button
          disabled={!isValid}
          className="my-4 w-full disabled:bg-gray-400 disabled:text-gray-200 bg-[#106FA4] text-white font-bold p-3 text-1xl rounded-md"
          text={isLoading ? "Sedang Memuat..." : "Daftar"}
          type={"submit"}
        />

        <DashedText />

        <Button
          className="my-4 w-full disabled:bg-gray-400 disabled:text-gray-200 bg-[#106FA4] text-white font-bold p-3 text-1xl rounded-md"
          text={isLoading ? "Sedang Memuat..." : "Daftar Dengan Google"}
          type={"button"}
        />
      </div>
    </Form>
  );
};

export default RegisterForm;
