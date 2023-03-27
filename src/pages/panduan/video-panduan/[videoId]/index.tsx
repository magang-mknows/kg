import Loading from "@/components/Loading";
import RegistrationVideoModules from "@/modules/RegistrationVideo";
import React, { ReactElement, Suspense } from "react";

const RegistrationVideoPages = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <RegistrationVideoModules />
    </Suspense>
  );
};

export default RegistrationVideoPages;
