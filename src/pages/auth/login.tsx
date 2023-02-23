import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { ReactElement } from "react";
import LoginForm from "@/modules/Auth/Login/Form";

const Login: NextPage = (): ReactElement => {
  return (
    <AuthLayouts title="Sign to your Account">
      <LoginForm />
    </AuthLayouts>
  );
};

export default Login;
