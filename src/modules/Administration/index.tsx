import BaseLayouts from "@/layouts/Base";
import React, { FC, lazy, ReactElement, Suspense } from "react";
import { administrationBreadCumbs } from "@/utilities/constant";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import MainLayouts from "@/layouts/Main";

const ContentAdministration = lazy(() => import("@/modules/Administration/ContentAdministration"));

const Administration: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"skeleton loading..."}>
        <BreadCrumb items={administrationBreadCumbs} />
        <MainLayouts>
          <h1 className="text-[20px] font-[600] ml-2">Administrasi</h1>
        </MainLayouts>

        <ContentAdministration />
      </Suspense>
    </BaseLayouts>
  );
};

export default Administration;
