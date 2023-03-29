import ForgotSkeleton from "@/components/Loading/Auth/ForgotSkeleton";
import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import SuspenseError from "@/modules/Common/SuspenseError";
import { NextPage } from "next";
import { lazy, ReactElement } from "react";

const ForgotPasswordForm = lazy(() => import("@/modules/Auth/Forgot/Form"));

const ForgotPassword: NextPage = (): ReactElement => {
  return (
    <AuthLayouts
      to="/auth/login"
      linkText="Login"
      title="Lupa Password"
      description="Sudah ingat akun mu?"
      img="/forgot-pass.svg"
    >
      <SuspenseError loadingFallback={<ForgotSkeleton />}>
        <ForgotPasswordForm />
      </SuspenseError>
    </AuthLayouts>
  );
};

export default ForgotPassword;
