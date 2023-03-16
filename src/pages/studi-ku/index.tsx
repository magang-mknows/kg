import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const MyStudyDash = lazy(() => import("@/modules/MyStudy/studiku-dash"));

const MyStudy: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <MyStudyDash />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MyStudy;
