import Button from "@/components/Common/Button";
import ControlledCheckboxField from "@/components/ControlledInputs/ControlledCheckboxField";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Form from "@/components/Form";
import { useLogin } from "@/hooks/Auth/useLogin";
import { AuthPayloadTypes } from "@/utilities/types/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginForm: FC = (): ReactElement => {
  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    password: z.string().min(6, { message: "Password setidaknya harus 6 karakter" }),
  });

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
    },
  });

  const { mutate, isLoading } = useLogin();

  const onSubmit = handleSubmit((data: AuthPayloadTypes) => {
    try {
      mutate(data, {
        onSuccess: () => {
          console.log("What happen when success");
        },
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
        labelClassName="block mb-2 text-sm dark:text-white font-medium text-gray-900 "
      />
      <ControlledTextField
        control={control}
        type={"password"}
        label={"Password"}
        name={"password"}
        placeholder={"*********"}
        required={true}
        labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
      />

      <div className="flex justify-between w-full">
        <ControlledCheckboxField
          control={control}
          name={"rememberme"}
          required={false}
          checked={false}
          labelClassName="dark:text-white text-black-900"
          label={"Remember Me"}
        />
        <Link className="text-blue-600" href={"/auth/forgot"}>
          Lupa Password akun-mu?
        </Link>
      </div>
      <div className="flex flex-col gap-y-1">
        <Button
          disabled={!isValid}
          className="my-4 w-full disabled:bg-slate-400 disabled:text-gray-300 bg-blue-600 text-white font-bold p-3 text-1xl rounded-md"
          text={isLoading ? "Sedang Masuk..." : "Masuk"}
          type={"submit"}
        />

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-bold text-gray-400 bg-white dark:text-white dark:bg-gray-800">
            Atau
          </span>
        </div>

        <Button
          className="my-4 w-full bg-gray-200 text-gray-400 font-bold p-3 text-1xl rounded-md"
          text="Masuk Dengan Google"
          type={"button"}
        />
      </div>
    </Form>
  );
};

export default LoginForm;
