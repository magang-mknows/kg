import { FC, ReactElement, lazy } from "react";

const LeaderBoardSection = lazy(() => import("./LeaderBoardSection"));
const ResumeSection = lazy(() => import("./ResumeSection"));
const ArticleSection = lazy(() => import("./ArticleSection"));

const SidebarSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
      <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
        <ResumeSection />
        <LeaderBoardSection />
      </div>
      <ArticleSection />
    </div>
  );
};

export default SidebarSection;
