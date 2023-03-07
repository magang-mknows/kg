import BaseLayouts from "@/layouts/Base";
import React, { FC, lazy, ReactElement, Suspense } from "react";
import { administrationBreadCumbs } from "@/utilities/constant";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import MainLayouts from "@/layouts/Main";
import TitleAdministration from "./TitleAdministration";

const ContentAdministration = lazy(() => import("@/modules/Administration/ContentAdministration"));

const Administration: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <div className=" bg-[#F5F5F5] w-full">
        <Suspense fallback={"skeleton loading..."}>
          <BreadCrumb items={administrationBreadCumbs} />
          <TitleAdministration />
          <ContentAdministration />
        </Suspense>
      </div>
    </BaseLayouts>
  );
};

export default Administration;
