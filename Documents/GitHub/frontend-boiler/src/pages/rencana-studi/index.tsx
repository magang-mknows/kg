import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SuspenseError from "@/modules/Common/SuspenseError";
import StudyPlanSkeleton from "@/components/Loading/StudyPlan/StudyPlanSkeleton";

const StudyPlan = lazy(() => import("@/modules/StudyPlan/ChoiceFaculty"));

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<StudyPlanSkeleton />}>
        <StudyPlan />
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
