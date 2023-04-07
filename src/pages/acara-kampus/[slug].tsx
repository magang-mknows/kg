import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import { useRouter } from "next/router";
// import EventDetail from "@/modules/Event/EventDetail";
import SuspenseError from "@/modules/Common/SuspenseError";
import EventDetailSkeleton from "@/components/Loading/Event/EventDetailSkeleton";

const EventDetail = lazy(() => import("@/modules/Event/EventDetail"));

const Detail: NextPage = (): ReactElement => {
  const { query } = useRouter();
  console.log(query.slug);
  return (
    <SuspenseError loadingFallback={<EventDetailSkeleton />}>
      <EventDetail />
    </SuspenseError>
  );
};

export default Detail;
