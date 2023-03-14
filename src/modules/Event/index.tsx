import BaseLayouts from "@/layouts/Base";
import { acaraKampusBreadCumbs } from "@/utilities/constant";
import { FC, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import EventHistory from "./EventHistory";
import RegisteredEvent from "./RegisteredEvent";

const EventList = lazy(() => import("./EventList"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const Event: FC = (): ReactElement => {
  return (
    <BaseLayouts className="lg:px-4">
      <ErrorBoundary fallback={<>Error was Happen</>}>
        <Suspense fallback={<>Loading...</>}>
          <BreadCrumbs items={acaraKampusBreadCumbs} />
          <div className="px-10 md:px-14 lg:px-20">
            <EventList />
            <RegisteredEvent />
            <EventHistory />
          </div>
        </Suspense>
      </ErrorBoundary>
    </BaseLayouts>
  );
};

export default Event;
