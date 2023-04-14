import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { courseBreadCumbs } from "@/utilities/constant";

const CourseHome = lazy(() => import("@/modules/MyStudy/Course/CourseHome"));

const CourseModule: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <BreadCrumb items={courseBreadCumbs} />
      <CourseHome />
    </BaseLayouts>
  );
};

export default CourseModule;
