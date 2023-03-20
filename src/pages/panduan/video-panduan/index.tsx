import Loading from "@/components/Loading";
import GuideVideoModule from "@/modules/GuideVideo";
import React, { ReactElement, Suspense } from "react";

const GuideVideoPages = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <GuideVideoModule />
    </Suspense>
  );
};

export default GuideVideoPages;
