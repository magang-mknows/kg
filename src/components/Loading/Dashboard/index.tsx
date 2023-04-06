import { FC, ReactElement } from "react";
import BreadCrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";
import SidebarSectionSkeleton from "./Sidebar";
import ContentSectionSkeleton from "./Content";

const DashboardSkeleton: FC = (): ReactElement => {
  return (
    <main className="animate-pulse py-2 bg-neutral-50 dark:bg-[#222529] min-h-[220vh] w-full overflow-hidden">
      <BreadCrumbSkeleton />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 px-6 md:px-8 lg:px-10">
        <SidebarSectionSkeleton />
        <ContentSectionSkeleton />
      </div>
    </main>
  );
};

export default DashboardSkeleton;
