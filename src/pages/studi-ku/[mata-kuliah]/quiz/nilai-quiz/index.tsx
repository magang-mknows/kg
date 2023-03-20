<<<<<<< HEAD
import QuizScore from "@/modules/MyStudy/Quiz/AfterQuiz/QuizScore";
=======
import StudikuModule from "@/modules/MyStudy/Quiz/AfterQuiz";
>>>>>>> 3d554709dbba589c1465b54b1803f9ff60cb0ff7
import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Loading = lazy(() => import("@/components/Loading"));

const AssigmentPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <QuizScore />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AssigmentPages;
