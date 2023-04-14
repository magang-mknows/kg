import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { studyPlanBreadCumbs } from "@/utilities/constant";
import ContentFaculty from "@/components/StudyPlan/ContentFaculty";
import Loading from "@/components/Loading";

const BreadCrumbs = lazy(() => import("@/components/StudyPlan/BreadCumb"));
const StudyPlan: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={<Loading />}>
        <BreadCrumbs items={studyPlanBreadCumbs} />
        <ContentFaculty />
      </Suspense>
    </BaseLayouts>
  );
};

export default StudyPlan;
