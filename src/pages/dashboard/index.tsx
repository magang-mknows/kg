import React, { FC, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const DashboardModules = lazy(() => import("@/modules/Dashboard"));

const DashboardPages: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<>Laoding dashboad</>}>
        <DashboardModules />;
      </Suspense>
    </ErrorBoundary>
  );
};

export default DashboardPages;
