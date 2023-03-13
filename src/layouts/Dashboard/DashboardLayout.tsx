import Footbar from "@/components/Footbar";
import Navbar from "@/components/Navbar";
import { FC, lazy, ReactElement } from "react";
import { BaseLayoutTypes } from "../Base/types";

import { dashboardBreadCumbs } from "@/utilities/constant";
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const DashboardLayout: FC<BaseLayoutTypes> = ({ children, className }): ReactElement => {
  return (
    <>
      <Navbar />
      <main className={`${className} py-2 bg-neutral-50 w-full overflow-hidden`}>
        <BreadCrumbs items={dashboardBreadCumbs} />
        <div className="flex px-10 md:px-14 lg:px-20 gap-9">{children}</div>
      </main>
      <Footbar />
    </>
  );
};

export default DashboardLayout;
