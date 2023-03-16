import Navbar from "@/components/Navbar";
import { FC, lazy, ReactElement } from "react";
import { BaseLayoutTypes } from "../Base/types";

import { dashboardBreadCumbs } from "@/utilities/constant";
import Footer from "@/components/Common/Footer";
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const DashboardLayout: FC<BaseLayoutTypes> = ({ children, className }): ReactElement => {
  return (
    <>
      <Navbar />
      <main
        className={`${className} py-2 bg-neutral-50 dark:bg-[#222529] min-h-[220vh] w-full overflow-hidden`}
      >
        <BreadCrumbs items={dashboardBreadCumbs} />
        <div className="grid grid-cols-3 gap-x-10 px-6 md:px-8 lg:px-10">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
