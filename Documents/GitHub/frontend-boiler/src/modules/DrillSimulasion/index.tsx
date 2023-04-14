import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement, Suspense } from "react";
import { drillSimulation } from "@/utilities/constant";

const Title = lazy(() => import("@/modules/DrillSimulasion/Title"));
const Content = lazy(() => import("@/modules/DrillSimulasion/Content"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const DrillSimulasion: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <BreadCrumbs items={drillSimulation} />
      <div className="px-6 md:px-8 lg:px-10 w-full">
        <Title />
        <Content />
      </div>
    </BaseLayouts>
  );
};

export default DrillSimulasion;
