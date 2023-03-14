import Loading from "@/components/Loading";
import { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Reschedule = lazy(() => import("@/modules/RescheduleSimulation"));

const RescheduleSimulation: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <Reschedule />
      </Suspense>
    </ErrorBoundary>
  );
};

export default RescheduleSimulation;
