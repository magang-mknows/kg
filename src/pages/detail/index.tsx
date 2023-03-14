import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const DetailContractStudy = lazy(() => import("@/modules/StudyPlan/DetailKontrak"));

const DetailContract: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <DetailContractStudy />
      </Suspense>
    </ErrorBoundary>
  );
};

export default DetailContract;
