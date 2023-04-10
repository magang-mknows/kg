import { FC, ReactElement } from "react";
import ContentSkeleton from "./ContentSkeleton";
import BreadcrumbSkor from "../../Loading/Assigment/Breadcrumb";

const SkorSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadcrumbSkor />
      <ContentSkeleton />
    </div>
  );
};

export default SkorSkeleton;
