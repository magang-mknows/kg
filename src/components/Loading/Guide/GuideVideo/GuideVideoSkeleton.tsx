import { FC, ReactElement } from "react";
import HeroSkeleton from "../HeroSkeleton";
import BreadcrumbVideo from "../../Assigment/Breadcrumb";
import ContentSkeleton from "./ContentSkeleton";

const GuideVideoSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadcrumbVideo />
      <HeroSkeleton />
      <ContentSkeleton />
    </div>
  );
};

export default GuideVideoSkeleton;
