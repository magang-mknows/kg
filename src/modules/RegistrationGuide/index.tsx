import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideRegistrationBreadCumbs } from "@/utilities/constant";
import React, { ReactElement } from "react";
import AnotherGuideBookSection from "./AnotherGuideBookSection";
import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";

const GuideBookModule = (): ReactElement => {
  return (
    <BaseLayoutsLanding>
      <BreadCrumb items={guideRegistrationBreadCumbs} />
      <HeroSection />
      <ContentSection />
      <AnotherGuideBookSection />
    </BaseLayoutsLanding>
  );
};

export default GuideBookModule;
