import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const EventList = lazy(() => import("@/modules/Event/EventList"));

const EventPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <EventList />
      </Suspense>
    </ErrorBoundary>
  );
};

export default EventPage;
