import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const ResetPassword = lazy(() => import("@/modules/Profile/ResetPasswordSection"));

const ResetPasswordPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <ResetPassword />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ResetPasswordPage;
