import { FC, ReactElement } from "react";
import ContentSkeleton from "./ContentSkeleton";
import BreadCrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";

const DiscussionSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadCrumbSkeleton />
      <ContentSkeleton />
    </div>
  );
};

export default DiscussionSkeleton;
