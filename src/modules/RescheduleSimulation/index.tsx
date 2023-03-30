import BaseLayouts from "@/layouts/Base";
import MainLayouts from "@/layouts/Main";
import { FC, lazy, ReactElement } from "react";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { rescheduleSimulationBreadCumbs } from "@/utilities/constant";
import SuspenseError from "../Common/SuspenseError";
import { useCategorySimulation } from "@/hooks/Simulation/useCategorySimulation";
import RulesSkeleton from "@/components/Loading/Reshedule/RulesSkeleton";

const Content = lazy(() => import("@/modules/RescheduleSimulation/content"));
const Rules = lazy(() => import("@/modules/RescheduleSimulation/rules"));
const DateTime = lazy(() => import("@/modules/RescheduleSimulation/dateTime"));

const RescheduleSimulation: FC = (): ReactElement => {
  const { getCategorySimulation } = useCategorySimulation();
  return (
    <BaseLayouts className="w-full">
      <BreadCrumb items={rescheduleSimulationBreadCumbs} />
      {/* <Content /> */}
      <div className="px-6 md:px-8 lg:px-10">
        <h1 className="text-[#262626] text-[28px] font-[700] mb-5 dark:text-white mt-5 ">
          {getCategorySimulation == "Active" ? "Reschedule " : ""}
          Simulasi, Drill & Assessment
        </h1>
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-10 mb-20">
          <SuspenseError loadingFallback={<RulesSkeleton />}>
            <Rules />
          </SuspenseError>
          <DateTime />
        </div>
      </div>
    </BaseLayouts>
  );
};

export default RescheduleSimulation;
