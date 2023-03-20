import Loading from "@/components/Loading";
import GuideBookModule from "@/modules/GuideBook";
import React, { ReactElement, Suspense } from "react";

const GuideBookPages = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <GuideBookModule />
    </Suspense>
  );
};

export default GuideBookPages;
