import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const AllFeatures = lazy(() => import("@/modules/AllFeatures"));

const AllFeaturesPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <AllFeatures />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AllFeaturesPage;
