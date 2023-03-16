import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { courseBreadCumbs } from "@/utilities/constant";

const CourseHome = lazy(() => import("@/modules/MyStudy/Course/CourseHome"));

const Course: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <BaseLayouts widthHScreen={false}>
        <Suspense fallback={<Loading />}>
          <BreadCrumb items={courseBreadCumbs} />
          <CourseHome />
        </Suspense>
      </BaseLayouts>
    </ErrorBoundary>
  );
};

export default Course;
