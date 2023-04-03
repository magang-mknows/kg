import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import CourseHomeSkeleton from "@/components/Loading/Course/CourseHomeSkeleton";

const CourseModule = lazy(() => import("@/modules/MyStudy/Course"));

const CoursePage: FC = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<CourseHomeSkeleton />}>
      <CourseModule />
    </SuspenseError>
  );
};

export default CoursePage;
