import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { administrationBreadCumbs } from "@/utilities/constant";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import AdministrationSkeleton from "@/components/Loading/Administration/ContentSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const ContentAdministration = lazy(() => import("@/modules/Administration/ContentAdministration"));
const TitleAdministration = lazy(() => import("@/modules/Administration/TitleAdministration"));

const Administration: FC = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<AdministrationSkeleton />}>
      <BaseLayouts>
        <div className=" bg-[#F5F5F5] w-full">
          <BreadCrumb items={administrationBreadCumbs} />
          <TitleAdministration />
          <ContentAdministration />
        </div>
      </BaseLayouts>
    </SuspenseError>
  );
};

export default Administration;
