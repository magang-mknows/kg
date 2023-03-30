import Loading from "@/components/Loading";
import RulesSkeleton from "@/components/Loading/Reshedule/RulesSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";
import { NextPage } from "next";
import { lazy, ReactElement } from "react";

const Reschedule = lazy(() => import("@/modules/RescheduleSimulation"));

const RescheduleSimulation: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<RulesSkeleton />}>
      <RulesSkeleton />
      <Reschedule />
    </SuspenseError>
  );
};

export default RescheduleSimulation;
