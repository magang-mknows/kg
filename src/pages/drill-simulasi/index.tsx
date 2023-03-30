import { lazy, ReactElement, Suspense } from "react";
import type { NextPage } from "next";
import TitleSkeleton from "@/components/Loading/Simulasion/TitleSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";
import SubmissionSkeleton from "@/components/Loading/Simulasion/SubmissionSkeleton";
import BaseLayouts from "@/layouts/Base";
import { drillSimulation } from "@/utilities/constant";

const DrillSimulasion = lazy(() => import("@/modules/DrillSimulasion"));
const Title = lazy(() => import("@/modules/DrillSimulasion/Title"));
const Content = lazy(() => import("@/modules/DrillSimulasion/Content"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const drillSimulasion: NextPage = (): ReactElement => {
  return (
    <BaseLayouts>
      {/* <BreadCrumbs items={drillSimulation} /> */}
      <div className="px-6 md:px-8 lg:px-10 w-full">
        <SuspenseError loadingFallback={<TitleSkeleton />}>
          <Title />
        </SuspenseError>
        <SuspenseError loadingFallback={<SubmissionSkeleton />}>
          <Content />
        </SuspenseError>
      </div>
    </BaseLayouts>
  );
};

export default drillSimulasion;
