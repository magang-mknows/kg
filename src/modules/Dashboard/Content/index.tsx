import { FC, lazy, ReactElement } from "react";

const EventCarouselSection = lazy(() => import("@/modules/Dashboard/Content/EventCarouselSection"));
const TaskCarouselSection = lazy(() => import("@/modules/Dashboard/Content/TaskCarouselSection"));
const MyCalendarSection = lazy(() => import("@/modules/Dashboard/Content/MyCalendarSection"));
const ProgressSection = lazy(() => import("@/modules/Dashboard/Content/ProgressSection"));

import SuspenseError from "@/modules/Common/SuspenseError";

import ProgressSkeleton from "@/components/Loading/Dashboard/Content/ProgressSkeleton";
import TaskEventCarouselSkeleton from "@/components/Loading/Dashboard/Content/TaskEventCarouselSkeleton";
import MyCalendarSkeleton from "@/components/Loading/Dashboard/Content/MyCalendarSkeleton";

const ContentSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
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
      <SuspenseError loadingFallback={<MyCalendarSkeleton />}>
        <MyCalendarSection />
      </SuspenseError>
    </div>
  );
};

export default ContentSection;
