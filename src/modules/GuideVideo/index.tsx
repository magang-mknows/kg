import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideVideoBreadCumbs } from "@/utilities/constant";
import React, { ReactElement } from "react";
import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";

const GuideVideoModule = (): ReactElement => {
  return (
    <BaseLayoutsLanding>
      <BreadCrumb items={guideVideoBreadCumbs} />
      <HeroSection />
      <ContentSection />
    </BaseLayoutsLanding>
  );
};

export default GuideVideoModule;
