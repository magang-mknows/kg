import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import ModuleContentSkeleton from "@/components/Loading/MyStudy/Module/ModuleContentSkeleton";
import BaseLayouts from "@/layouts/Base";

const ModulContent = lazy(() => import("@/modules/MyStudy/Modul/Modul"));

const ModulStudy: NextPage = (): ReactElement => {
  return (
    <BaseLayouts>
      <SuspenseError loadingFallback={<ModuleContentSkeleton />}>
        <ModulContent />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default ModulStudy;
