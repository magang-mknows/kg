import { FC, lazy, ReactElement } from "react";

const DashboardLayout = lazy(() => import("@/layouts/Dashboard/DashboardLayout"));
const SidebarSection = lazy(() => import("./Sidebar"));
const ContentSection = lazy(() => import("./Content"));

const DashboardModules: FC = (): ReactElement => {
  return (
    <DashboardLayout>
      <SidebarSection />
      <ContentSection />
    </DashboardLayout>
  );
};

export default DashboardModules;
