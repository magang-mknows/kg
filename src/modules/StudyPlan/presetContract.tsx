import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { contractStudyBreadCumbs } from "@/utilities/constant";

import Loading from "@/components/Loading";

const BreadCrumbs = lazy(() => import("@/components/StudyPlan/BreadCumb"));
const PresetContract: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={<Loading />}>
        <BreadCrumbs items={contractStudyBreadCumbs} />
        <h1>Hallo</h1>
      </Suspense>
    </BaseLayouts>
  );
};

export default PresetContract;
