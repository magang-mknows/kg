import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { myStudyBreadCumbs } from "@/utilities/constant";
import { FC, ReactElement, lazy } from "react";

const MyStudyDash = lazy(() => import("@/modules/MyStudy/studiku-dash"));

const MyStudyModules: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <BreadCrumb items={myStudyBreadCumbs} />
      <MyStudyDash />
    </BaseLayouts>
  );
};

export default MyStudyModules;
