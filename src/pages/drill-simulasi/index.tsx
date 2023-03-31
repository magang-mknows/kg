import { lazy, ReactElement, Suspense } from "react";
import type { NextPage } from "next";
import SuspenseError from "@/modules/Common/SuspenseError";
import SimulasionSkeleton from "@/components/Loading/Simulasion/SimulasionSkeleton";

const DrillSimulasion = lazy(() => import("@/modules/DrillSimulasion"));

const drillSimulasion: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<SimulasionSkeleton />}>
      <DrillSimulasion />
    </SuspenseError>
  );
};

export default drillSimulasion;
