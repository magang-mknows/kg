import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
import SuspenseError from "@/modules/Common/SuspenseError";
import ProfilSkeleton from "@/components/Loading/Profil/ProfilSkeleton";

const ResetPassword = lazy(() => import("@/modules/Profile/ResetPasswordSection"));

const ResetPasswordPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<ProfilSkeleton />}>
        <ResetPassword />
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default ResetPasswordPage;
