import { FC, lazy, ReactElement } from "react";
import SuspenseError from "../Common/SuspenseError";
import TaskEventCarouselSkeleton from "@/components/Loading/Dashboard/Content/TaskEventCarouselSkeleton";
import ProgressSkeleton from "@/components/Loading/Dashboard/Content/ProgressSkeleton";

const DashboardLayout = lazy(() => import("@/layouts/Dashboard/DashboardLayout"));
const SidebarSection = lazy(() => import("./Sidebar"));
const ContentSection = lazy(() => import("./Content"));

const LeaderBoardSection = lazy(() => import("@/modules/Dashboard/Sidebar/LeaderBoardSection"));
const ResumeSection = lazy(() => import("@/modules/Dashboard/Sidebar/ResumeSection"));
const ArticleSection = lazy(() => import("@/modules/Dashboard/Sidebar/ArticleSection"));
const EventCarouselSection = lazy(() => import("@/modules/Dashboard/Content/EventCarouselSection"));
const TaskCarouselSection = lazy(() => import("@/modules/Dashboard/Content/TaskCarouselSection"));
const MyCalendarSection = lazy(() => import("@/modules/Dashboard/Content/MyCalendarSection"));
const ProgressSection = lazy(() => import("@/modules/Dashboard/Content/ProgressSection"));

const DashboardModules: FC = (): ReactElement => {
  return (
    <DashboardLayout>
      <SidebarSection />
      <ContentSection />
    </DashboardLayout>
  );
};

export default DashboardModules;

{
  /* SIDEBAR */
}
{
  /* <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
        <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
          <ResumeSection />
          <LeaderBoardSection />
        </div>
        <ArticleSection />
      </div> */
}
{
  /* CONTENT */
}
{
  /* <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
        <div className="flex gap-y-6 gap-x-3 w-full flex-wrap lg:flex-nowrap mb-6">
          <SuspenseError
            loadingFallback={
              <>
                <TaskEventCarouselSkeleton />
                <TaskEventCarouselSkeleton />
              </>
            }
          >
          <TaskCarouselSection />
          <EventCarouselSection />
          </SuspenseError>
        </div>
        <SuspenseError loadingFallback={<ProgressSkeleton />}>
          <ProgressSection />
        </SuspenseError>
        <MyCalendarSection />
      </div> */
}
