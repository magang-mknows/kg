import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { administrationBreadCumbs } from "@/utilities/constant";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import TitleAdministration from "./TitleAdministration";
import AdministrationSkeleton from "@/components/Loading/Administration/AdministrationSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const ContentAdministration = lazy(() => import("@/modules/Administration/ContentAdministration"));

const Administration: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <div className=" bg-[#F5F5F5] w-full">
        <SuspenseError loadingFallback={<AdministrationSkeleton />}>
          <BreadCrumb items={administrationBreadCumbs} />
          <TitleAdministration />
          <ContentAdministration />
        </SuspenseError>
      </div>
    </BaseLayouts>
  );
};

export default Administration;
