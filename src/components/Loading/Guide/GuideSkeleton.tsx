import { FC, ReactElement } from "react";
import HeroSkeleton from "./HeroSkeleton";
import BreadcrumbGuide from "../Assigment/Breadcrumb";
import FaqSkeleton from "./FaqSkeleton";
import TableSkeleton from "./TableSkeleton";

const GuideSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadcrumbGuide />
      <HeroSkeleton />
      <FaqSkeleton />
      <TableSkeleton />
    </div>
  );
};

export default GuideSkeleton;
