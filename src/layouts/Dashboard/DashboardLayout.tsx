import Footbar from "@/components/Footbar";
import Navbar from "@/components/Navbar";
import React, { FC, lazy, ReactElement, Suspense } from "react";
import { BaseLayoutTypes } from "../Base/types";

import { dashboardBreadCumbs } from "@/utilities/constant";
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const DashboardLayout: FC<BaseLayoutTypes> = ({ children, className }): ReactElement => {
  return (
    <>
      <Suspense fallback="loading...">
        <Navbar />
      </Suspense>
      <main className={`${className} py-2 bg-neutral-50 w-screen overflow-hidden`}>
        <BreadCrumbs items={dashboardBreadCumbs} />
        <div className="flex px-10 md:px-14 lg:px-20 gap-9">{children}</div>
      </main>
      <Footbar />
    </>
  );
};

export default DashboardLayout;
