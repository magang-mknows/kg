import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

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
      <ErrorBoundary fallback={<>Error Was Happen</>}>
        <Suspense fallback={<>Loading...</>}>
          <ForgotPasswordForm />
        </Suspense>
      </ErrorBoundary>
    </AuthLayouts>
  );
};

export default ForgotPassword;
