import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SubmissionContractSkeleton from "@/components/Loading/StudyPlan/SubmissionContractSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const ContractStudy = lazy(() => import("@/modules/StudyPlan/ContractStudy"));

const ContractPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<SubmissionContractSkeleton />}>
        <ContractStudy />
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default ContractPages;
