import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { contractStudyBreadCumbs } from "@/utilities/constant";
import CardContractStudy from "@/components/StudyPlan/CardContractStudy";
import Loading from "@/components/Loading";

const BreadCrumbs = lazy(() => import("@/components/StudyPlan/BreadCumb"));
const ContractStudy: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={<Loading />}>
        <BreadCrumbs items={contractStudyBreadCumbs} />
        <CardContractStudy />
      </Suspense>
    </BaseLayouts>
  );
};

export default ContractStudy;
