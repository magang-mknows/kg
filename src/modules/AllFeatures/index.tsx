import React, { FC, ReactElement, lazy } from "react";
import BaseLayouts from "@/layouts/Base";

const Features = lazy(() => import("@/modules/AllFeatures/Features"));


const AllFeatures: FC = (): ReactElement => {
  return (
    <div>
      <BaseLayouts>
        <Features />
      </BaseLayouts>
    </div>
  );
};

export default AllFeatures;
