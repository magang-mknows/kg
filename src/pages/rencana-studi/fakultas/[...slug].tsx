import type { NextPage } from "next";
import { ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
import StudyProgram from "@/modules/StudyPlan/StudyProgram";

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <StudyProgram />
      </Suspense>
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
