import { FC, ReactElement } from "react";
import BreadCrumbDetilV from "@/components/Loading/Assigment/Breadcrumb";
import YoutubeSkeleton from "./YoutubeSkeleton";
import DescriptionSkeleton from "./DescriptionSkeleton";

const GuideVideoDetail: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadCrumbDetilV />
      <div className="w-full px-6 md:px-8 lg:px10 my-[68px]">
        <div className="flex-row lg:flex gap-[68px] xl:flex-nowrap lg:flex-wrap">
          <YoutubeSkeleton />
          <DescriptionSkeleton />

          {/* <div className="w-full">
          <ListVideo />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default GuideVideoDetail;
