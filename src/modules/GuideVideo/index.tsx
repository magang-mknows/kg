import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideVideoBreadCumbs } from "@/utilities/constant";
import React, { ReactElement, Suspense } from "react";
import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";

const GuideVideoModule = (): ReactElement => {
  return (
    <div>
      <BaseLayoutsLanding>
        <Suspense fallback={<Loading />}>
          <BreadCrumb items={guideVideoBreadCumbs} />
          <HeroSection />
          <ContentSection />
        </Suspense>
      </BaseLayoutsLanding>
    </div>
  );
};

export default GuideVideoModule;
