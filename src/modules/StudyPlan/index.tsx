import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { studyPlanBreadCumbs } from "@/utilities/constant";
import ContentFaculty from "@/components/StudyPlan/ContentFaculty";

const BreadCrumbs = lazy(() => import("@/components/StudyPlan/BreadCumb"));
const StudyPlan: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <BreadCrumbs items={studyPlanBreadCumbs} />
        <ContentFaculty />
      </Suspense>
    </BaseLayouts>
  );
};

export default StudyPlan;
