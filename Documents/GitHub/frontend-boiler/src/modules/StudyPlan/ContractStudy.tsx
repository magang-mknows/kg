import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { contractStudyBreadCumbs } from "@/utilities/constant";
import Loading from "@/components/Loading";

const BreadCrumbs = lazy(() => import("@/components/StudyPlan/BreadCumb"));
const SubmissionContractStudy = lazy(
  () => import("@/components/StudyPlan/SubmissionContractStudy"),
);

const ContractStudy: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <BreadCrumbs items={contractStudyBreadCumbs} />
      <Suspense fallback={<Loading />}>
        <SubmissionContractStudy />
      </Suspense>
    </BaseLayouts>
  );
};

export default ContractStudy;
