import { FC, ReactElement } from "react";
import BreadcrumbLeaderboard from "../../Loading/Assigment/Breadcrumb";
import ContentSkeleton from "./ContentSkeleton";

const LeaderboardSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadcrumbLeaderboard />
      <ContentSkeleton />
    </div>
  );
};

export default LeaderboardSkeleton;
