import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const StudyPlan = lazy(() => import("@/modules/StudyPlan/ChoiceFaculty"));

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <StudyPlan />
      </Suspense>
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
