import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { rescheduleSimulationBreadCumbs } from "@/utilities/constant";

const Content = lazy(() => import("@/modules/RescheduleSimulation/content"));

const RescheduleSimulation: FC = (): ReactElement => {
  return (
    <BaseLayouts className="w-full">
      <BreadCrumb items={rescheduleSimulationBreadCumbs} />
      <Content />
    </BaseLayouts>
  );
};

export default RescheduleSimulation;
