import { lazy, ReactElement } from "react";
import type { NextPage } from "next";
import SuspenseError from "@/modules/Common/SuspenseError";
import LoadingSimulasion from "@/modules/DrillSimulasion/Loading/loading";

const DrillSimulasion = lazy(() => import("@/modules/DrillSimulasion"));

const drillSimulasion: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingSimulasion />}>
      <DrillSimulasion />
    </SuspenseError>
  );
};

export default drillSimulasion;
