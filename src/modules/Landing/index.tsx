import { FC, lazy, ReactElement, useEffect } from "react";

import BaseLayouts from "@/layouts/Base";
import dynamic from "next/dynamic";
import SuspenseError from "../Common/SuspenseError";
import { useInView } from "react-intersection-observer";

const HeroSection = lazy(() => import("./HeroSection"));
const CardSection = lazy(() => import("./CardSection"));
const PatnerSection = lazy(() => import("./PatnerSection"));
const SekilasSection = lazy(() => import("./SekilasSection"));
const AboutSection = lazy(() => import("./AboutSection"));
const ChooseStudyProgram = lazy(() => import("./ChooseStudyProgram"));
const InformationBanner = lazy(() => import("./InformationBanner"));
const InformationSection = lazy(() => import("./InformationSection"));
const PromotionBanner = lazy(() => import("./PromotionBanner"));
const TestimonySection = lazy(() => import("./TestimonySection"));
const Footbar = lazy(() => import("@/components/Footbar"));

import HeroSkeleton from "@/components/Loading/Landing/HeroSkeleton";
import CardSkeleton from "@/components/Loading/Landing/CardSkeleton";
import PartnerSkeleton from "@/components/Loading/Landing/PartnerSkeleton";
import SekilasSkeleton from "@/components/Loading/Landing/SekilasSkeleton";
import AboutSkeleton from "@/components/Loading/Landing/AboutSkeleton";

const Landing: FC = (): ReactElement => {
  const { inView, ref } = useInView({
    threshold: 0.0,
  });
  useEffect(() => {
    if (inView) {
      console.log("visible");
    }
  });
  return (
    <BaseLayouts>
      <div ref={ref}>
        <SuspenseError loadingFallback={<HeroSkeleton />}>
          {inView && <HeroSection />}
        </SuspenseError>
        <SuspenseError loadingFallback={<CardSkeleton />}>
          {inView && <CardSection />}
        </SuspenseError>
        <SuspenseError loadingFallback={<PartnerSkeleton />}>
          {inView && <PatnerSection />}
        </SuspenseError>
        <SuspenseError loadingFallback={<SekilasSkeleton />}>
          {inView && <SekilasSection />}
        </SuspenseError>
        <SuspenseError loadingFallback={<AboutSkeleton />}>
          {inView && <AboutSection />}
        </SuspenseError>
        <SuspenseError>{inView && <InformationBanner />}</SuspenseError>
        <SuspenseError>{inView && <ChooseStudyProgram />}</SuspenseError>
        <SuspenseError>{inView && <TestimonySection />}</SuspenseError>
        <SuspenseError>{inView && <InformationSection />}</SuspenseError>
        <SuspenseError>{inView && <PromotionBanner />}</SuspenseError>
        <SuspenseError>{inView && <Footbar />}</SuspenseError>
      </div>
    </BaseLayouts>
  );
};

export default Landing;
