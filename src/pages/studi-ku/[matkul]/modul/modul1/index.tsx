import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import ModuleContentSkeleton from "@/components/Loading/MyStudy/Module/ModuleContentSkeleton";

const ModulContent = lazy(() => import("@/modules/MyStudy/Modul/Modul"));

const ModulStudy: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<ModuleContentSkeleton />}>
      {/* <ModulContent /> */}
      <ModuleContentSkeleton />
    </SuspenseError>
  );
};

export default ModulStudy;
