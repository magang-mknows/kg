import SuspenseError from "@/modules/Common/SuspenseError";
import React, { lazy, ReactElement } from "react";
import LoadingGuideDictionary from "@/modules/GuideDictionary/loading";

const GuideDictionaryModule = lazy(() => import("@/modules/GuideDictionary"));

const GuideDictionaryPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingGuideDictionary />}>
      <LoadingGuideDictionary />
      <GuideDictionaryModule />
    </SuspenseError>
  );
};

export default GuideDictionaryPages;
