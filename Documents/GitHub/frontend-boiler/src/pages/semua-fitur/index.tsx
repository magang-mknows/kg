import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SuspenseError from "@/modules/Common/SuspenseError";
import SemuaFiturSkeleton from "@/components/Loading/SemuaFitur/SemuaFiturSkeleton";

const AllFeatures = lazy(() => import("@/modules/AllFeatures"));

const AllFeaturesPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<SemuaFiturSkeleton />}>
        <AllFeatures />
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default AllFeaturesPage;
