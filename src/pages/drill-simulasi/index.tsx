import { lazy, ReactElement, Suspense } from "react";
import type { NextPage } from "next";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const DrillSimulasion = lazy(() => import("@/modules/DrillSimulasion"));

const drillSimulasion: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <DrillSimulasion />
      </Suspense>
    </ErrorBoundary>
  );
};

export default drillSimulasion;
