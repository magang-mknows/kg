import RegisterSkeleton from "@/components/Loading/Auth/RegisterSkeleton";
import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import SuspenseError from "@/modules/Common/SuspenseError";
import { NextPage } from "next";
import { lazy, ReactElement } from "react";

const RegisterForm = lazy(() => import("@/modules/Auth/Register/Form"));

const Register: NextPage = (): ReactElement => {
  return (
    <div className="bg-[#FAFAFA]">
      <AuthLayouts
        title="Daftar Akun"
        description="Silahkan isi data berikut untuk melakukan pendaftaran"
        linkText="Login Disini"
        to="/auth/login"
      >
        <SuspenseError loadingFallback={<RegisterSkeleton />}>
          <RegisterForm />
        </SuspenseError>
      </AuthLayouts>
    </div>
  );
};

export default Register;
