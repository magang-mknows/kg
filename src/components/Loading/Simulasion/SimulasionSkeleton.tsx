import { FC, ReactElement } from "react";
import TitleSkeleton from "./TitleSkeleton";
import SubmissionSkeleton from "./SubmissionSkeleton";
import BreadCrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";

const SimulasionSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadCrumbSkeleton />
      <TitleSkeleton />
      <SubmissionSkeleton />
    </div>
  );
};

export default SimulasionSkeleton;
