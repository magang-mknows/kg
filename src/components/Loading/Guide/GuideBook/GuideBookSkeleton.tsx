import { FC, ReactElement } from "react";
import HeroSkeleton from "./HeroSkeleton";
import BreadcrumbGuideBook from "../../Assigment/Breadcrumb";
import ContentSkeleton from "./ContentSkeleton";

const GuideBookSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadcrumbGuideBook />
      <HeroSkeleton />
      <ContentSkeleton />
    </div>
  );
};

export default GuideBookSkeleton;
