import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideRegistrationVideo } from "@/utilities/constant";
import React, { ReactElement, Suspense } from "react";

const RegistrationVideoModules = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <BaseLayoutsLanding>
        <BreadCrumb items={guideRegistrationVideo} />
      </BaseLayoutsLanding>
    </Suspense>
  );
};

export default RegistrationVideoModules;
