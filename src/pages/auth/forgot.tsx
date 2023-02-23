import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { ReactElement } from "react";
import ForgotPasswordForm from "@/modules/Auth/Forgot/Form";

const ForgotPassword: NextPage = (): ReactElement => {
  return (
    <AuthLayouts
      to="/auth/login"
      linkText="Login"
      title="Lupa Password"
      description="Sudah ingat akun mu?"
      img="/forgot-pass.svg"
    >
      <ForgotPasswordForm />
    </AuthLayouts>
  );
};

export default ForgotPassword;
