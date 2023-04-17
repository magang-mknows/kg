import SuspenseError from "@/modules/Common/SuspenseError";
import { ReactElement, lazy } from "react";
import LoadingLeaderboard from "@/modules/Leaderboard/loading";

const LeaderBoardModules = lazy(() => import("@/modules/Leaderboard"));

const LeaderBoardPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingLeaderboard />}>
      <LeaderBoardModules />
    </SuspenseError>
  );
};

export default LeaderBoardPages;
