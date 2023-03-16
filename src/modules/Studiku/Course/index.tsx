import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { breadCrumbDummyData } from "../Quiz/store/dummy-data";

const CourseHome = lazy(() => import("@/modules/Studiku/Course/CourseHome"));

const Course: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <BaseLayouts widthHScreen={false}>
        <Suspense fallback={<Loading />}>
          <BreadCrumb items={breadCrumbDummyData} />
          <CourseHome />
        </Suspense>
      </BaseLayouts>
    </ErrorBoundary>
  );
};

export default Course;
