import type { NextPage } from "next";
import { ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
import ContentStudyProgram from "@/components/StudyPlan/ContentStudyProgram";

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <ContentStudyProgram />
      </Suspense>
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
