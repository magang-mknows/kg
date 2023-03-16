import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import AnotherGuideBookSection from "@/modules/RegistrationBook/AnotherGuideBookSection";
import ContentSection from "@/modules/RegistrationBook/ContentSection";
import HeroSection from "@/modules/RegistrationBook/HeroSection";
import { guideBookBreadCumbs } from "@/utilities/constant";
import React, { ReactElement, Suspense } from "react";

const BukuPanduan = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <BaseLayoutsLanding className=" !bg-neutral-100">
        <BreadCrumb items={guideBookBreadCumbs} />
        <HeroSection />
        <ContentSection />
        <AnotherGuideBookSection />
      </BaseLayoutsLanding>
    </Suspense>
  );
};

export default BukuPanduan;
