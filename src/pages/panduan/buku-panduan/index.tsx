import React, { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import LoadingGuideBook from "@/modules/GuideBook/loading";

const GuideBookModule = lazy(() => import("@/modules/GuideBook"));

const GuideBookPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingGuideBook />}>
      <GuideBookModule />
    </SuspenseError>
  );
};

export default GuideBookPages;
