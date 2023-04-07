import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideBookBreadCumbs } from "@/utilities/constant";
import React, { ReactElement } from "react";
import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";

const GuideBookModule = (): ReactElement => {
  return (
    <BaseLayoutsLanding>
      <BreadCrumb items={guideBookBreadCumbs} />
      <HeroSection />
      <ContentSection />
    </BaseLayoutsLanding>
  );
};

export default GuideBookModule;
