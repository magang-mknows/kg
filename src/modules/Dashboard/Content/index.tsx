import { FC, lazy, ReactElement } from "react";

const EventCarouselSection = lazy(() => import("@/modules/Dashboard/Content/EventCarouselSection"));
const TaskCarouselSection = lazy(() => import("@/modules/Dashboard/Content/TaskCarouselSection"));
const MyCalendarSection = lazy(() => import("@/modules/Dashboard/Content/MyCalendarSection"));
const ProgressSection = lazy(() => import("@/modules/Dashboard/Content/ProgressSection"));

const ContentSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
      <div className="flex gap-y-6 gap-x-3 w-full flex-wrap lg:flex-nowrap mb-6">
        <TaskCarouselSection />
        <EventCarouselSection />
      </div>
      <ProgressSection />
      <MyCalendarSection />
    </div>
  );
};

export default ContentSection;
