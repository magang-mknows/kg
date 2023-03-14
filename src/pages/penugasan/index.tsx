import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const AssigmentModules = lazy(() => import("@/modules/Assigment"));
const Loading = lazy(() => import("@/components/Loading"));

const AssigmentPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <AssigmentModules />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AssigmentPages;
