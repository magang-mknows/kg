import BaseLayouts from "@/layouts/Base";
import MainLayouts from "@/layouts/Main";
import { FC, lazy, ReactElement } from "react";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { rescheduleSimulationBreadCumbs } from "@/utilities/constant";
import SuspenseError from "../Common/SuspenseError";
import ContentSkeleton from "@/components/Loading/Reshedule/ContentSkeleton";

const Content = lazy(() => import("@/modules/RescheduleSimulation/content"));

const RescheduleSimulation: FC = (): ReactElement => {
  return (
    <BaseLayouts className="w-full">
      <BreadCrumb items={rescheduleSimulationBreadCumbs} />
      <SuspenseError loadingFallback={<ContentSkeleton />}>
        <Content />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default RescheduleSimulation;
