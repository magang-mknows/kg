import DetailReport from "@/components/DiscussionRoom/DetailReport";
import BaseLayouts from "@/layouts/Base";
import { acaraKampusBreadCumbs } from "@/utilities/constant";
import { FC, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const EventList = lazy(() => import("@/modules/Event/EventList"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const Event: FC = (): ReactElement => {
  return (
    <BaseLayouts className="">
      <ErrorBoundary fallback={<>Error was Happen</>}>
        <Suspense fallback={<>Loading...</>}>
          <BreadCrumbs items={acaraKampusBreadCumbs} />
          <div className="w-full px-6 md:px-8 lg:px-10">
            <EventList />
            <DetailReport />
          </div>
        </Suspense>
      </ErrorBoundary>
    </BaseLayouts>
  );
};

export default Event;
