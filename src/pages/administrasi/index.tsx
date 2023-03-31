import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import AdministrationSkeleton from "@/components/Loading/Administration/AdministrationSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const Administration = lazy(() => import("@/modules/Administration"));

const AdministrationPages: NextPage = (): ReactElement => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <SuspenseError loadingFallback={<AdministrationSkeleton />}>
      <Administration />
    </SuspenseError>
  );
};

export default AdministrationPages;
