import Button from "@/components/Common/Button";
import ControlledCheckboxField from "@/components/ControlledInputs/ControlledCheckboxField";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Form from "@/components/Form";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "@/hooks/Auth/useRegister";

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
      confirm_password: undefined,
      fullname: "",
      terms: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(data, {
        onError: (err) => {
          console.log(err);
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
      <ControlledTextField
        control={control}
        type={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Masukan Email Anda"}
        required={true}
        labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
      />
      <ControlledTextField
        control={control}
        type={"text"}
        label={"Nama Lengkap"}
        name={"fullname"}
        placeholder={"Masukan Nama Lengkap Anda"}
        required={true}
        labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
      />
      <ControlledTextField
        control={control}
        type={"password"}
        label={"Password"}
        name={"password"}
        placeholder={"*********"}
        required={true}
        labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
      />{" "}
      <ControlledTextField
        control={control}
        type={"password"}
        label={"Confirm Password"}
        name={"confirm_password"}
        placeholder={"*********"}
        required={true}
        labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
      />
      <div className="flex justify-between w-full">
        <ControlledCheckboxField
          control={control}
          name={"terms"}
          required={false}
          labelClassName="dark:text-white text-black-900"
          label={"Saya setuju dengan term of service."}
        />
      </div>
      <Button
        disabled={!isValid}
        className="my-4 w-full disabled:bg-gray-400 disabled:text-gray-200 bg-blue-600 text-white font-bold p-3 text-1xl rounded-md"
        text={isLoading ? "Sedang Memuat..." : "Daftar"}
        type={"submit"}
      />
    </Form>
  );
};

export default RegisterForm;
