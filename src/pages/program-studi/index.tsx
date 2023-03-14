import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const StudyProgram = lazy(() => import("@/modules/StudyPlan/StudyProgram"));

const StudyProgramPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <StudyProgram />
      </Suspense>
    </ErrorBoundary>
  );
};

export default StudyProgramPage;
