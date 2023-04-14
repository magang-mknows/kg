import SuspenseError from "@/modules/Common/SuspenseError";
import React, { lazy, ReactElement } from "react";
import GuideDictionary from "@/components/Loading/Guide/GuideDictionary/GuideDictionary";

const GuideDictionaryModule = lazy(() => import("@/modules/GuideDictionary/index"));

const GuideDictionaryPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<GuideDictionary />}>
      <GuideDictionaryModule />
    </SuspenseError>
  );
};

export default GuideDictionaryPages;
