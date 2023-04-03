import BaseLayouts from "@/layouts/Base";
import { acaraKampusBreadCumbs } from "@/utilities/constant";
import { FC, lazy, ReactElement } from "react";

const EventList = lazy(() => import("@/modules/Event/EventList"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const Event: FC = (): ReactElement => {
  return (
    <BaseLayouts className="">
      <BreadCrumbs items={acaraKampusBreadCumbs} />
      <div className="w-full px-6 md:px-8 lg:px-10">
        <EventList />
      </div>
    </BaseLayouts>
  );
};

export default Event;
