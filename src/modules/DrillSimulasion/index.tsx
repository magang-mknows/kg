import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement, Suspense } from "react";
import { drillSimulation } from "@/utilities/constant";
import SuspenseError from "../Common/SuspenseError";
import TitleSkeleton from "@/components/Loading/Simulasion/TitleSkeleton";
import SubmissionSkeleton from "@/components/Loading/Simulasion/SubmissionSkeleton";

const Title = lazy(() => import("@/modules/DrillSimulasion/Title"));
const Content = lazy(() => import("@/modules/DrillSimulasion/Content"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const DrillSimulasion: FC = (): ReactElement => {
  return (
    // <BaseLayouts>
    <>
      <BreadCrumbs items={drillSimulation} />
      <div className="px-6 md:px-8 lg:px-10 w-full">
        <SuspenseError loadingFallback={<TitleSkeleton />}>
          <Title />
        </SuspenseError>
        <SuspenseError loadingFallback={<SubmissionSkeleton />}>
          <Content />
        </SuspenseError>
      </div>
    </>
    // </BaseLayouts>
  );
};

export default DrillSimulasion;
