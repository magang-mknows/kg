import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { assigmentBreadCumbs } from "@/utilities/constant";

const BannerAssignment = lazy(() => import("@/modules/Assigment/BannerSection"));
const ContentAssignment = lazy(() => import("@/modules/Assigment/ContentSection"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));
const Penugasan: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <BreadCrumbs items={assigmentBreadCumbs} />
        <BannerAssignment />
        <ContentAssignment />
      </Suspense>
    </BaseLayouts>
  );
};

export default Penugasan;
