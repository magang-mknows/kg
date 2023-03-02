import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";

const BannerAssignment = lazy(() => import("@/modules/Assigment/BannerSection"));
const ContentAssignment = lazy(() => import("@/modules/Assigment/ContentSection"));
const Penugasan: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <BannerAssignment />
        <ContentAssignment />
      </Suspense>
    </BaseLayouts>
  );
};

export default Penugasan;
