import { FC, ReactElement } from "react";
import BreadcrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";
import ContentSkeleton from "./ContentSkeleton";

const RescheduleSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadcrumbSkeleton />
      <ContentSkeleton />
    </div>
  );
};

export default RescheduleSkeleton;
