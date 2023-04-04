import SuspenseError from "@/modules/Common/SuspenseError";
import React, { lazy, ReactElement } from "react";
import GuideVideoDetail from "@/components/Loading/Guide/GuideVideoDetail/GuideVideoDetail";

const RegistrationVideoModules = lazy(() => import("@/modules/RegistrationVideo"));

const RegistrationVideoPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<GuideVideoDetail />}>
      <GuideVideoDetail />
      <RegistrationVideoModules />
    </SuspenseError>
  );
};

export default RegistrationVideoPages;
