import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { administrationBreadCumbs } from "@/utilities/constant";
import BreadCrumb from "@/components/Assigment/BreadCrumb";

const ContentAdministration = lazy(() => import("@/modules/Administration/ContentAdministration"));
const TitleAdministration = lazy(() => import("@/modules/Administration/TitleAdministration"));

const Administration: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <div className=" bg-[#F5F5F5] w-full">
        <BreadCrumb items={administrationBreadCumbs} />
        <TitleAdministration />
        <ContentAdministration />
      </div>
    </BaseLayouts>
  );
};

export default Administration;
