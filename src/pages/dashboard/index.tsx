import Sidebar from "@/modules/Dashboard/Sidebar/Index";
import React, { FC, ReactElement } from "react";

const Dashboard: FC = (): ReactElement => {
  return (
    <div className="flex gap-9 bg-neutral-100 min-h-[1200px]">
      {/* style nya ganti aja bang maul, komponen sidebarnya dah ready  */}
      <Sidebar />
    </div>
  );
};

export default Dashboard;
