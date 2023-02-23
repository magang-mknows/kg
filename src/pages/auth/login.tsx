import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { ReactElement } from "react";
import LoginForm from "@/modules/Auth/Login/Form";

const Login: NextPage = (): ReactElement => {
  return (
    <AuthLayouts
      to="/auth/register"
      linkText="Daftar disini"
      title="Selamat Datang"
      description="Belum punya akun?"
    >
      <LoginForm />
    </AuthLayouts>
  );
};

export default Login;
