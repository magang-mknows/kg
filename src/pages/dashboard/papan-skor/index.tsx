import LeaderBoardModules from "@/modules/Leaderboard";
import React, { ReactElement, Suspense } from "react";

const LeaderBoardPages = (): ReactElement => {
  return (
    <Suspense>
      <LeaderBoardModules />
    </Suspense>
  );
};

export default LeaderBoardPages;
