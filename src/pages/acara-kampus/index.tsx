import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
import CreateDiscussion from "@/modules/RuangDiskusi/CreateDiscussion";

const Event = lazy(() => import("@/modules/Event"));

const EventPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <Event />
        <CreateDiscussion />
      </Suspense>
    </ErrorBoundary>
  );
};

export default EventPage;
