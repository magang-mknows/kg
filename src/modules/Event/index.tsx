import { FC, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const EventList = lazy(() => import("./EventList"));

const Event: FC = (): ReactElement => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <ErrorBoundary fallback={<>Error was Happen</>}>
        <EventList />
      </ErrorBoundary>
    </Suspense>
  );
};

export default Event;
