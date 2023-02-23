import GlobalButton from "@/components/Common/GlobalButton";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Form from "@/components/Form";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";

const RegisterForm: FC = (): ReactElement => {
  const { control } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });
  return (
    <Form className="space-y-4 md:space-y-6">
      <ControlledTextField
        control={control}
        type={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Masukan Email Anda"}
        required={true}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        labelClassName="block mb-2 text-sm font-medium text-gray-900 "
      />
      <ControlledTextField
        control={control}
        type={"password"}
        label={"Password"}
        name={"password"}
        placeholder={"*********"}
        required={true}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        labelClassName="block mb-2 text-sm font-medium text-gray-900 "
      />{" "}
      <ControlledTextField
        control={control}
        type={"password"}
        label={"Confirm Password"}
        name={"confirm-password"}
        placeholder={"*********"}
        required={true}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        labelClassName="block mb-2 text-sm font-medium text-gray-900 "
      />
      <div className="flex justify-center">
        <GlobalButton
          page={`/`}
          className="px-20 py-1 my-4 font-bold text-blue-400 border-2 border-blue-400 rounded-md"
          text="Login"
          type={"button"}
        />
      </div>
      <p className="text-sm font-light text-gray-500 ">
        Don’t have an account yet?{" "}
        <Link href="/auth/register" className="font-medium text-primary-600 hover:underline ">
          Sign up
        </Link>
      </p>
    </Form>
  );
};

export default RegisterForm;
