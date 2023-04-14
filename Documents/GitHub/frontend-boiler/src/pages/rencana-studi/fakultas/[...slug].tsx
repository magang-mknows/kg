import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";
import StudyProgramSkeleton from "@/components/Loading/StudyPlan/StudyProgramSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const StudyProgram = lazy(() => import("@/modules/StudyPlan/StudyProgram"));

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<StudyProgramSkeleton />}>
        <StudyProgram />
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
