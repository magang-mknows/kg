import Loading from "@/components/Loading";
import RegistrationGuideModules from "@/modules/RegistrationGuide/index";
import { ReactElement, Suspense } from "react";
const RegistrationGuidePages = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <RegistrationGuideModules />
    </Suspense>
  );
};

export default RegistrationGuidePages;
