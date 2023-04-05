import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import DashboardSkeleton from "@/components/Loading/Dashboard";
import BaseLayouts from "@/layouts/Base";

const DashboardModules = lazy(() => import("@/modules/Dashboard"));

const DashboardPages: NextPage = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError loadingFallback={<DashboardSkeleton />}>
        <DashboardModules />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default DashboardPages;
