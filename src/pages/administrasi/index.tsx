import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import AdministrationSkeleton from "@/components/Loading/Administration/ContentSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const Administration = lazy(() => import("@/modules/Administration"));

const AdministrationPages: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<AdministrationSkeleton />}>
      <Administration />
    </SuspenseError>
  );
};

export default AdministrationPages;
