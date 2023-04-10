import { FC, ReactElement } from "react";
import ResumeSectionSkeleton from "@/components/Loading/Dashboard/Sidebar/ResumeSectionSkeleton";

const SidebarSectionSkeleton: FC = (): ReactElement => {
  return (
    <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
      <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
        <ResumeSectionSkeleton />
        {/* <LeaderBoardSection /> */}
      </div>
      {/* <ArticleSection /> */}
    </div>
  );
};

export default SidebarSectionSkeleton;
