import { FC, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const MyCalendarSection = lazy(() => import("./MyCalendarSection"));
const ProgressSection = lazy(() => import("./ProgressSection"));

const ContentSection: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<>Loading...</>}>
        <div className="flex flex-col">
          <ProgressSection />
          <MyCalendarSection />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ContentSection;
