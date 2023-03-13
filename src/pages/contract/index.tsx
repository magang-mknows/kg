import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ContractStudy = lazy(() => import("@/modules/StudyPlan/ContractStudy"));

const ContractPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={"Loading..."}>
        <ContractStudy />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ContractPages;
