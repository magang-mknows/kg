import SuspenseError from "@/modules/Common/SuspenseError";
import { NextPage } from "next";
import { lazy, ReactElement } from "react";
import LoadingReschedule from "@/modules/RescheduleSimulation/loading";

const Reschedule = lazy(() => import("@/modules/RescheduleSimulation"));

const RescheduleSimulation: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingReschedule />}>
      <Reschedule />
    </SuspenseError>
  );
};

export default RescheduleSimulation;
