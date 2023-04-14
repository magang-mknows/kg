import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { studyProgramBreadCumbs } from "@/utilities/constant";
import ContentStudyProgram from "@/components/StudyPlan/ContentStudyProgram";
import Loading from "@/components/Loading";

const BreadCrumbs = lazy(() => import("@/components/StudyPlan/BreadCumb"));
const StudyProgram: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={<Loading />}>
        <BreadCrumbs items={studyProgramBreadCumbs} />
        <ContentStudyProgram />
      </Suspense>
    </BaseLayouts>
  );
};

export default StudyProgram;
