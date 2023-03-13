import React, { FC, ReactElement } from "react";
import MyCalendar from "./Content/MyCalendar";
import ProgressSection from "./Content/ProgressSection";
import Sidebar from "./Sidebar/Index";

import DashboardLayout from "@/layouts/Dashboard/DashboardLayout";
import TopInformationSection from "./Content/Top-Info/TopInformationSection";

const Dashboard: FC = (): ReactElement => {
  return (
    <>
      <DashboardLayout>
        <Sidebar />
        <div>
          <TopInformationSection />
          <ProgressSection />
          <MyCalendar />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
