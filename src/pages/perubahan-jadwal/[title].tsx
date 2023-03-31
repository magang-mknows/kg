import ContentSkeleton from "@/components/Loading/Reshedule/ContentSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";
import { NextPage } from "next";
import { lazy, ReactElement } from "react";

const Reschedule = lazy(() => import("@/modules/RescheduleSimulation"));

const RescheduleSimulation: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<ContentSkeleton />}>
      <Reschedule />
    </SuspenseError>
  );
};

export default RescheduleSimulation;
