import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideRegistrationBreadCumbs } from "@/utilities/constant";
import React, { ReactElement, Suspense } from "react";
import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";

const GuideBook = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <BaseLayoutsLanding>
        <BreadCrumb items={guideRegistrationBreadCumbs} />
        <HeroSection />
        <ContentSection />
      </BaseLayoutsLanding>
    </Suspense>
  );
};

export default GuideBook;
