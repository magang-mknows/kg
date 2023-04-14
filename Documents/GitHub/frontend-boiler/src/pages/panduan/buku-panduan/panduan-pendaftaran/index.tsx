import SuspenseError from "@/modules/Common/SuspenseError";
import { lazy, ReactElement } from "react";
import GuideRegist from "@/components/Loading/Guide/GuideRegist/GuideRegist";

const RegistrationGuideModules = lazy(() => import("@/modules/RegistrationGuide/index"));

const RegistrationGuidePages = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<GuideRegist />}>
      <RegistrationGuideModules />
    </SuspenseError>
  );
};

export default RegistrationGuidePages;
