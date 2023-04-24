import SuspenseError from "@/modules/Common/SuspenseError";
import React, { lazy, ReactElement } from "react";
import LoadingGuideVideo from "@/modules/GuideVideo/loading";

const GuideVideoModule = lazy(() => import("@/modules/GuideVideo"));

const GuideVideoPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingGuideVideo />}>
      <GuideVideoModule />
    </SuspenseError>
  );
};

export default GuideVideoPages;
