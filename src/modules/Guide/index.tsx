import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { guideBreadCumbs } from "@/utilities/constant";
import React, { FC, ReactElement } from "react";
import HeroSection from "./HeroSection";
import FaqSection from "./FaqSection";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import GuideSection from "./GuideSection";

const Landing: FC = (): ReactElement => {
  return (
    <div>
      <BaseLayoutsLanding>
        <BreadCrumb items={guideBreadCumbs} />
        <HeroSection />
        <FaqSection />
        <GuideSection />
      </BaseLayoutsLanding>
    </div>
  );
};

export default Landing;
