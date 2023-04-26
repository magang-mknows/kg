import SuspenseError from "@/modules/Common/SuspenseError";
import React, { lazy, ReactElement } from "react";

import LoadingRegistrationVideo from "@/modules/RegistrationVideo/loading";

const RegistrationVideoModules = lazy(() => import("@/modules/RegistrationVideo"));

const RegistrationVideoPages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingRegistrationVideo />}>
      <RegistrationVideoModules />
    </SuspenseError>
  );
};

export default RegistrationVideoPages;
