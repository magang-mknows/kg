import React, { FC, ReactElement, lazy } from "react";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "../Common/SuspenseError";
import SemuaFiturSkeleton from "@/components/Loading/SemuaFitur/SemuaFiturSkeleton";

const Features = lazy(() => import("@/modules/AllFeatures/Features"));

const AllFeatures: FC = (): ReactElement => {
  return (
    <div>
      <SuspenseError loadingFallback={<SemuaFiturSkeleton/>}>
      <BaseLayouts>
        <Features />
      </BaseLayouts>
      </SuspenseError>
    </div>
  );
};

export default AllFeatures;
