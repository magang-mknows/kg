import { FC, lazy, ReactElement } from "react";

const DashboardLayout = lazy(() => import("@/layouts/Dashboard/DashboardLayout"));
const SidebarSection = lazy(() => import("@/modules/Dashboard/Sidebar"));
const ContentSection = lazy(() => import("@/modules/Dashboard/Content"));

const DashboardModules: FC = (): ReactElement => {
  return (
    <DashboardLayout>
      <SidebarSection />
      <ContentSection />
    </DashboardLayout>
  );
};

export default DashboardModules;
