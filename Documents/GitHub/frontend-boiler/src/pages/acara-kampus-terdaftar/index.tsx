import BaseLayouts from "@/layouts/Base";

import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import { acaraKampusBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import EventSkeleton from "@/components/Loading/Event/EventSkeleton";

const RegisteredEvent = lazy(() => import("@/modules/Event/RegisteredEvent"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const EventPage: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<EventSkeleton />}>
      <BaseLayouts className="">
        <BreadCrumbs items={acaraKampusBreadCumbs} />
        <div className="w-full px-6 md:px-8 lg:px-10">
          <RegisteredEvent />
        </div>
      </BaseLayouts>
    </SuspenseError>
  );
};

export default EventPage;
