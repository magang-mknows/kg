import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideRegistrationVideo } from "@/utilities/constant";
import React, { ReactElement } from "react";
import ContentSection from "./ContentSection";

const RegistrationVideoModules = (): ReactElement => {
  return (
    <BaseLayoutsLanding className="!bg-[#FAFAFA] dark:!bg-gray-900">
      <BreadCrumb items={guideRegistrationVideo} />
      <ContentSection />
    </BaseLayoutsLanding>
  );
};

export default RegistrationVideoModules;
