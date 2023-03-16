import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import { guideBreadCumbs } from "@/utilities/constant";
import React, { FC, ReactElement, Suspense } from "react";
import HeroSection from "./HeroSection";
import FaqSection from "./FaqSection";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import GuideSection from "./GuideSection";

const Landing: FC = (): ReactElement => {
  return (
    <div>
      <BaseLayoutsLanding>
        <Suspense fallback={<Loading />}>
          <BreadCrumb items={guideBreadCumbs} />
          <HeroSection />
          <FaqSection />
          <GuideSection />
        </Suspense>
      </BaseLayoutsLanding>
    </div>
  );
};

export default Landing;
