import BaseLayouts from "@/layouts/Base";
import MainLayouts from "@/layouts/Main";
import { FC, lazy, ReactElement } from "react";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { rescheduleSimulationBreadCumbs } from "@/utilities/constant";
import { ErrorBoundary } from "react-error-boundary";

const Content = lazy(() => import("@/modules/RescheduleSimulation/content"));

const RescheduleSimulation: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <BreadCrumb items={rescheduleSimulationBreadCumbs} />
      <MainLayouts>
        <Content />
      </MainLayouts>
    </BaseLayouts>
  );
};

export default RescheduleSimulation;
