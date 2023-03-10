import React, { FC, ReactElement, lazy } from "react";
import { Inter } from "next/font/google";
import BaseLayouts from "@/layouts/Base";

const Features = lazy(() => import("@/modules/AllFeatures/Features"));

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

const AllFeatures: FC = (): ReactElement => {
  return (
    <div className={`${inter.className}`}>
      <BaseLayouts>
        <Features />
      </BaseLayouts>
    </div>
  );
};

export default AllFeatures;
