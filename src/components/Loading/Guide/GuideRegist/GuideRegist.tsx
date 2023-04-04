import { FC, ReactElement } from "react";
import HeroSkeleton from "./HeroSkeleton";
import BreadcrumbRegist from "../../Assigment/Breadcrumb";
import ContentSkeleton from "./ContentSkeleton";

const GuideRegist: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadcrumbRegist />
      <HeroSkeleton />
      <ContentSkeleton />
    </div>
  );
};

export default GuideRegist;
