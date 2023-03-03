import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const RegisterForm = lazy(() => import("@/modules/Auth/Register/Form"));

const Register: NextPage = (): ReactElement => {
  return (
    <AuthLayouts
      title="Daftar Akun"
      description="Silahkan isi data berikut untuk melakukan pendaftaran"
      linkText="Login Disini"
      to="/auth/login"
    >
      <ErrorBoundary fallback={<>Error was Happen</>}>
        <Suspense fallback={<>Loading...</>}>
          <RegisterForm />
        </Suspense>
      </ErrorBoundary>
    </AuthLayouts>
  );
};

export default Register;
