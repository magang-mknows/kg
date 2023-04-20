import SuspenseError from "@/modules/Common/SuspenseError";
import { lazy, ReactElement } from "react";
import LoadingRegistrationGuide from "@/modules/RegistrationGuide/loading";

const RegistrationGuideModules = lazy(() => import("@/modules/RegistrationGuide/index"));

const RegistrationGuidePages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingRegistrationGuide />}>
      <RegistrationGuideModules />
    </SuspenseError>
  );
};

export default RegistrationGuidePages;
