import Loading from "@/components/Loading";
import GuideDictionaryModule from "@/modules/GuideDictionary";
import React, { ReactElement, Suspense } from "react";

const GuideDictionaryPages = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <GuideDictionaryModule />
    </Suspense>
  );
};

export default GuideDictionaryPages;
