import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement, Suspense } from "react";
import { modulBreadCumbs } from "@/utilities/constant";

const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));
const CardModul = lazy(() => import("@/components/MyStudy/ModulCard"));

const index: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <Suspense fallback={<Loading />}>
        <BreadCrumbs items={modulBreadCumbs} />
        <CardModul />
      </Suspense>
    </BaseLayouts>
  );
};

export default index;
