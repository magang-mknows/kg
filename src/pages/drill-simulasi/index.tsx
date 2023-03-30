import { lazy, ReactElement, Suspense } from "react";
import type { NextPage } from "next";
import TitleSkeleton from "@/components/Loading/Simulasion/TitleSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const DrillSimulasion = lazy(() => import("@/modules/DrillSimulasion"));

const drillSimulasion: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<TitleSkeleton />}>
      <DrillSimulasion />
    </SuspenseError>
  );
};

export default drillSimulasion;
