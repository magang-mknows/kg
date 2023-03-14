import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const DashboardModules = lazy(() => import("@/modules/Dashboard"));

const DashboardPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <DashboardModules />;
      </Suspense>
    </ErrorBoundary>
  );
};

export default DashboardPages;
