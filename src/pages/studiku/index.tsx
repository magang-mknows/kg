import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Loading = lazy(() => import("@/components/Loading"));

const AssigmentPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <h1>Nanti diisi konten yaaaa :)</h1>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AssigmentPages;
