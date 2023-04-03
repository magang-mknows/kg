import SuspenseError from "@/modules/Common/SuspenseError";
import { NextPage } from "next";
import { lazy, ReactElement } from "react";
import RescheduleSkeleton from "@/components/Loading/Reshedule/RescheduleSkeleton";

const Reschedule = lazy(() => import("@/modules/RescheduleSimulation"));

const RescheduleSimulation: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<RescheduleSkeleton />}>
      <Reschedule />
    </SuspenseError>
  );
};

export default RescheduleSimulation;
