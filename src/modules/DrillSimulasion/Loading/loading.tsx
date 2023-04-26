import { FC, ReactElement } from "react";
import TitleSkeleton from "./TitleSkeleton";
import SubmissionSkeleton from "./SubmissionSkeleton";

const LoadingSimulasion: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <div className="px-9 py-5">
        <section className="animate-pulse w-64 py-3 rounded-lg bg-gray-200" />
      </div>
      <TitleSkeleton />
      <SubmissionSkeleton />
    </div>
  );
};

export default LoadingSimulasion;
