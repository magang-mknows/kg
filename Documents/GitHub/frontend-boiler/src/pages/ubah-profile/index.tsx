import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SuspenseError from "@/modules/Common/SuspenseError";
import ProfilSkeleton from "@/components/Loading/Profil/ProfilSkeleton";

const EditProfile = lazy(() => import("@/modules/Profile/EditProfileSection"));

const EditProfilPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<ProfilSkeleton/>}>
        <EditProfile />
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default EditProfilPage;
