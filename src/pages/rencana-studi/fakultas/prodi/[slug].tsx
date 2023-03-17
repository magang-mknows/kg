import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const ContractStudy = lazy(() => import("@/modules/StudyPlan/ContractStudy"));

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <ContractStudy />
      </Suspense>
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
