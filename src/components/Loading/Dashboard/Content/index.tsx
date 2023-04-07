import { FC, ReactElement } from "react";
import TaskEventCarouselSkeleton from "@/components/Loading/Dashboard/Content/TaskEventCarouselSkeleton";
import ProgressSkeleton from "@/components/Loading/Dashboard/Content/ProgressSkeleton";
const ContentSectionSkeleton: FC = (): ReactElement => {
  return (
    <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-6 gap-x-3 w-full flex-wrap lg:flex-nowrap mb-6">
        <TaskEventCarouselSkeleton />
        <TaskEventCarouselSkeleton />
      </div>
      <ProgressSkeleton />
      {/* <MyCalendarSection /> */}
    </div>
  );
};

export default ContentSectionSkeleton;
