import BaseLayouts from "@/layouts/Base";

import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
import { acaraKampusBreadCumbs } from "@/utilities/constant";

const RegisteredEvent = lazy(() => import("@/modules/Event/RegisteredEvent"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const EventPage: NextPage = (): ReactElement => {
  return (
    <BaseLayouts className="">
      <ErrorBoundary fallback={<>Error was happen</>}>
        <Suspense fallback={<Loading />}>
          <BreadCrumbs items={acaraKampusBreadCumbs} />
          <div className="w-full px-20">
            <RegisteredEvent />
          </div>
        </Suspense>
      </ErrorBoundary>
    </BaseLayouts>
  );
};

export default EventPage;
