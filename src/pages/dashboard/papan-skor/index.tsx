import Loading from "@/components/Loading";
import SuspenseError from "@/modules/Common/SuspenseError";
import LeaderBoardModules from "@/modules/Leaderboard";
import React, { ReactElement } from "react";

const LeaderBoardPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<Loading />}>
      <LeaderBoardModules />
    </SuspenseError>
  );
};

export default LeaderBoardPages;
