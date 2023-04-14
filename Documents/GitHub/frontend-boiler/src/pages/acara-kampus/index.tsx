import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import EventSkeleton from "@/components/Loading/Event/EventSkeleton";

const Event = lazy(() => import("@/modules/Event"));

const EventPage: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<EventSkeleton />}>
      <Event />
    </SuspenseError>
  );
};

export default EventPage;
