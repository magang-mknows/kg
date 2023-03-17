import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideRegistrationVideo } from "@/utilities/constant";
import React, { ReactElement } from "react";
import YoutubeSection from "./YoutubeSection";

const RegistrationVideoModules = (): ReactElement => {
  return (
    <BaseLayoutsLanding>
      <BreadCrumb items={guideRegistrationVideo} />
      <YoutubeSection />
    </BaseLayoutsLanding>
  );
};

export default RegistrationVideoModules;
