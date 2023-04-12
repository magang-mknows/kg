import { FC, lazy, ReactElement } from "react";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { courseBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import CourseHomeSkeleton from "@/components/Loading/Course/CourseHomeSkeleton";

const CourseHomeModule = lazy(() => import("@/modules/MyStudy/Course/CourseHome"));

const CoursePage: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <SuspenseError loadingFallback={<CourseHomeSkeleton />}>
        <BreadCrumb items={courseBreadCumbs} />
        <CourseHomeModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default CoursePage;
