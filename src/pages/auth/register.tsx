import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { ReactElement } from "react";
import RegisterForm from "@/modules/Auth/Register/Form";

const Register: NextPage = (): ReactElement => {
  return (
    <AuthLayouts
      title="Buat akun baru"
      description="Sudah punya akun?"
      linkText="Login Disini"
      to="/auth/login"
    >
      <RegisterForm />
    </AuthLayouts>
  );
};

export default Register;
