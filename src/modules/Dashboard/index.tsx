import React, { FC, ReactElement } from "react";
import MyCalendar from "./Content/MyCalendar";
import Sidebar from "./Sidebar/Index";

import DashboardLayout from "@/layouts/Dashboard/DashboardLayout";

const Dashboard: FC = (): ReactElement => {
  return (
    <>
      <DashboardLayout>
        <Sidebar />
        <MyCalendar />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
