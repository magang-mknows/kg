import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import ModuleHomeSkeleton from "@/components/Loading/MyStudy/Module/ModuleHomeSkeleton";
import BaseLayouts from "@/layouts/Base";
import { modulBreadCumbs } from "@/utilities/constant";
import BreadCrumbs from "@/components/Assigment/BreadCrumb";

const ModuleStudyContent = lazy(() => import("@/modules/MyStudy/Modul"));

const ModulePage: NextPage = (): ReactElement => {
  return (
    <BaseLayouts>
      <SuspenseError loadingFallback={<ModuleHomeSkeleton />}>
        <BreadCrumbs items={modulBreadCumbs} />
        <ModuleStudyContent />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default ModulePage;
