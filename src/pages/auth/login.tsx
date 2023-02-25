import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const LoginForm = lazy(() => import("@/modules/Auth/Login/Form"));

const Login: NextPage = (): ReactElement => {
  return (
    <AuthLayouts
      to="/auth/register"
      linkText="Daftar disini"
      title="Selamat Datang"
      description="Belum punya akun?"
    >
      <ErrorBoundary fallback={<>Error was Happen</>}>
        <Suspense fallback={<>Loading...</>}>
          <LoginForm />
        </Suspense>
      </ErrorBoundary>
    </AuthLayouts>
  );
};

export default Login;
