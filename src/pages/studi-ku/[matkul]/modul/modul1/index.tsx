import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import ModuleContentSkeleton from "@/components/Loading/MyStudy/Module/ModuleContentSkeleton";
import BaseLayouts from "@/layouts/Base";

const ModulContentModule = lazy(() => import("@/modules/MyStudy/Modul/Modul"));

const ModuleContentPage: NextPage = (): ReactElement => {
  return (
    <BaseLayouts>
      <SuspenseError loadingFallback={<ModuleContentSkeleton />}>
        <ModulContentModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default ModuleContentPage;
