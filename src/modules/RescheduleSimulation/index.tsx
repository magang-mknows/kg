import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { rescheduleSimulationBreadCumbs } from "@/utilities/constant";
import SuspenseError from "../Common/SuspenseError";
import LoadingReschedule from "./loading";

const Content = lazy(() => import("@/modules/RescheduleSimulation/content"));

const RescheduleSimulation: FC = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingReschedule />}>
      <BaseLayouts className="w-full">
        <BreadCrumb items={rescheduleSimulationBreadCumbs} />
        <Content />
      </BaseLayouts>
    </SuspenseError>
  );
};

export default RescheduleSimulation;
