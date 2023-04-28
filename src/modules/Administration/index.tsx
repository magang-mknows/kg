import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { administrationBreadCumbs } from "@/utilities/constant";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import TitleAdministration from "./TitleAdministration";
import { useFetchAllAdministration } from "./hooks";

const ContentAdministration = lazy(() => import("@/modules/Administration/ContentAdministration"));

const Administration: FC = (): ReactElement => {
  const { data } = useFetchAllAdministration();
  const getAll = data?.data;
  console.log("get-all", getAll);
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
