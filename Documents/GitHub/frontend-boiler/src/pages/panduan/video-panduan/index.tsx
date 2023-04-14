import SuspenseError from "@/modules/Common/SuspenseError";
import GuideVideoSkeleton from "@/components/Loading/Guide/GuideVideo/GuideVideoSkeleton";
import React, { lazy, ReactElement } from "react";

const GuideVideoModule = lazy(() => import("@/modules/GuideVideo"));

const GuideVideoPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<GuideVideoSkeleton />}>
      <GuideVideoModule />
    </SuspenseError>
  );
};

export default GuideVideoPages;
