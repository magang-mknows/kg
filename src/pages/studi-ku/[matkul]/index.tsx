import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { courseBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import CourseHomeSkeleton from "@/components/Loading/Course/CourseHomeSkeleton";

const CourseHome = lazy(() => import("@/modules/MyStudy/Course"));

const Course: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <BaseLayouts widthHScreen={false}>
        <SuspenseError loadingFallback={<CourseHomeSkeleton />}>
          <BreadCrumb items={courseBreadCumbs} />
          <CourseHome />
        </SuspenseError>
      </BaseLayouts>
    </ErrorBoundary>
  );
};

export default Course;
