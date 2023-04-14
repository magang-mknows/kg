import BaseLayouts from "@/layouts/Base";

import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import { acaraKampusBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import HistoryEventSkeleton from "@/components/Loading/Event/HistoryEventSkeleton";

const EventHistory = lazy(() => import("@/modules/Event/EventHistory"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const EventPage: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<HistoryEventSkeleton />}>
      <BaseLayouts className="">
        <BreadCrumbs items={acaraKampusBreadCumbs} />
        <div className="w-full px-6 md:px-8 lg:px-10">
          <EventHistory />
        </div>
      </BaseLayouts>
    </SuspenseError>
  );
};

export default EventPage;
