import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import Loading from "@/components/Loading";
import { ErrorBoundary } from "react-error-boundary";
import SubmissionContractSkeleton from "@/components/Loading/StudyPlan/SubmissionContractSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const ContractStudy = lazy(() => import("@/modules/StudyPlan/ContractStudy"));

const ContractPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<SubmissionContractSkeleton />}>
        <SubmissionContractSkeleton />
        <ContractStudy />
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default ContractPages;
