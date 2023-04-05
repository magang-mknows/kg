import LeaderboardSkeleton from "@/components/Loading/Leaderboard/LeaderboardSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";
import { ReactElement, lazy } from "react";

const LeaderBoardModules = lazy(() => import("@/modules/Leaderboard"));

const LeaderBoardPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LeaderboardSkeleton />}>
      <LeaderboardSkeleton />
      <LeaderBoardModules />
    </SuspenseError>
  );
};

export default LeaderBoardPages;
