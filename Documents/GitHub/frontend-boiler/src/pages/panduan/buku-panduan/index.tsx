import React, { lazy, ReactElement, Suspense } from "react";
import GuideBookSkeleton from "@/components/Loading/Guide/GuideBook/GuideBookSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const GuideBookModule = lazy(() => import("@/modules/GuideBook"));

const GuideBookPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<GuideBookSkeleton />}>
      <GuideBookModule />
    </SuspenseError>
  );
};

export default GuideBookPages;
