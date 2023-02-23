import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { ReactElement } from "react";
import RegisterForm from "@/modules/Auth/Register/Form";

const Register: NextPage = (): ReactElement => {
  return (
    <AuthLayouts title="Create your Account">
      <RegisterForm />
    </AuthLayouts>
  );
};

export default Register;
