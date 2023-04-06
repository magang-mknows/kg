import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import ModuleHomeSkeleton from "@/components/Loading/MyStudy/Module/ModuleHomeSkeleton";

const ModulStudyContent = lazy(() => import("@/modules/MyStudy/Modul"));

const ModulStudy: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<ModuleHomeSkeleton />}>
      <ModulStudyContent />
    </SuspenseError>
  );
};

export default ModulStudy;
