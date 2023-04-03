import { FC, Fragment, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import EventCarousel from "./EventCarousel";
import EventCarouselSection from "./EventCarouselSection";

const MyCalendarSection = lazy(() => import("./MyCalendarSection"));
const ProgressSection = lazy(() => import("./ProgressSection"));

import TaskCarousel from "./TaskCarousel";
import TaskCarouselSection from "./TaskCarouselSection";

const ContentSection: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<>Loading...</>}>
        <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
          <div className="flex gap-y-6 gap-x-3 w-full flex-wrap lg:flex-nowrap mb-6">
            <TaskCarouselSection />
            <EventCarouselSection />
          </div>
          <ProgressSection />
          <MyCalendarSection />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ContentSection;
