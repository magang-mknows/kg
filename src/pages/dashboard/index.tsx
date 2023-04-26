import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import BaseLayouts from "@/layouts/Base";

const DashboardModules = lazy(() => import("@/modules/Dashboard"));

const DashboardPages: NextPage = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <DashboardModules />
    </BaseLayouts>
  );
};

export default DashboardPages;
