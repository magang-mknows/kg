import { FC, Fragment, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import EventCarousel from "./EventCarousel";

const MyCalendarSection = lazy(() => import("./MyCalendarSection"));
const ProgressSection = lazy(() => import("./ProgressSection"));

import TaskCarousel from "./TaskCarousel";

const ContentSection: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<>Loading...</>}>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-6 gap-4">
            <TaskCarousel />
            <EventCarousel />
          </div>
          <ProgressSection />
          <MyCalendarSection />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ContentSection;
