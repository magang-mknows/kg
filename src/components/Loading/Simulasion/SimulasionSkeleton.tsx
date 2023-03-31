import { FC, ReactElement } from "react";
import TitleSkeleton from "./TitleSkeleton";
import SubmissionSkeleton from "./SubmissionSkeleton";

const SimulasionSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-56">
      <TitleSkeleton />
      <SubmissionSkeleton />
    </div>
  );
};

export default SimulasionSkeleton;
