import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const EditProfile = lazy(() => import("@/modules/Profile/EditProfileSection"));

const EditProfilPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <EditProfile />
      </Suspense>
    </ErrorBoundary>
  );
};

export default EditProfilPage;
