import BaseLayouts from "@/layouts/Base";
import MainLayouts from "@/layouts/Main";
import { FC, lazy, ReactElement } from "react";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { rescheduleSimulationBreadCumbs } from "@/utilities/constant";
import { ErrorBoundary } from "react-error-boundary";

const Content = lazy(() => import("@/modules/RescheduleSimulation/content"));

const RescheduleSimulation: FC = (): ReactElement => {
  return (
    <BaseLayouts className="w-full">
      <ErrorBoundary fallback={<>Errow was happen</>}>
        <BreadCrumb items={rescheduleSimulationBreadCumbs} />
        <Content />
      </ErrorBoundary>
    </BaseLayouts>
  );
};

export default RescheduleSimulation;
