import Button from "@/components/Common/Button";
import DashedText from "@/components/Common/DashedText";
import ControlledCheckboxField from "@/components/ControlledInputs/ControlledCheckboxField";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Form from "@/components/Form";
import { useLogin } from "@/hooks/Auth/useLogin";
import { handleError } from "@/utilities/helper";
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
    password: z.string().min(1, { message: "Password harus diisi" }),
    remember: z.boolean(),
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
      remember: false,
    },
  });

  const { mutate, isLoading } = useLogin();

  const onSubmit = handleSubmit((data: AuthPayloadTypes) => {
    try {
      mutate(data, {
        onError: (err) => {
          console.log(err as string);
        },
      });
    } catch (err) {
      throw handleError(err);
    }
  });

  return (
    <Form
      onSubmit={onSubmit}
      className="lg:w-[720px] sm:w-[620px] lg:h-[600px] sm:h-[400px] flex flex-col justify-center p-8"
    >
      <section className="flex flex-col w-full gap-y-2 mb-4">
        <h1 className="md:text-5xl text-2xl text-center font-bold font-black-900">Masuk</h1>
        <p className="text-center text-sm md:text-base">
          Silahkan masuk menggunakan email dan kata sandi yang terdaftar{" "}
        </p>
      </section>
      <ControlledTextField
        control={control}
        type={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Masukan Email Anda"}
        required
        error="Error gays"
      />
      <ControlledTextField
        control={control}
        type={"password"}
        label={"Password"}
        name={"password"}
        placeholder={"*********"}
        required
      />

      <div className="flex justify-between w-full">
        <ControlledCheckboxField
          control={control}
          name={"remember"}
          required={false}
          label={"Remember Me"}
        />
        <Link className="text-blue-600" href={"/auth/forgot"}>
          Lupa Password akun-mu?
        </Link>
      </div>
      <div className="flex flex-col gap-y-1 my-4">
        <Button
          disabled={!isValid}
          className="my-4 w-full disabled:bg-slate-400 disabled:text-gray-300 bg-blue-600 text-white font-bold p-3 text-1xl rounded-md"
          text={isLoading ? "Sedang Masuk..." : "Masuk"}
          type={"submit"}
        />

        <DashedText />

        <Button
          className="my-4 w-full bg-gray-50 border-2 border-black-900 text-gray-600 font-bold p-3 text-1xl rounded-md"
          text="Masuk Dengan Google"
          type={"button"}
        />
      </div>
    </Form>
  );
};

export default LoginForm;
