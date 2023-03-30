import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { courseBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import CourseHomeSkeleton from "@/components/Loading/Course/CourseHomeSkeleton";

const CourseHome = lazy(() => import("@/modules/MyStudy/Course"));

const CoursePage: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError>
        <BreadCrumb items={courseBreadCumbs} />
      </SuspenseError>
      <SuspenseError loadingFallback={<CourseHomeSkeleton />}>
        <CourseHome />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default CoursePage;
