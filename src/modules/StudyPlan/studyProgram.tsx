import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { studyProgramBreadCumbs } from "@/utilities/constant";
import ContentStudyProgram from "@/components/StudyPlan/ContentStudyProgram";

const BreadCrumbs = lazy(() => import("@/components/StudyPlan/BreadCumb"));
const StudyProgram: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <BreadCrumbs items={studyProgramBreadCumbs} />
        <ContentStudyProgram />
      </Suspense>
    </BaseLayouts>
  );
};

export default StudyProgram;
