import { FC, lazy, ReactElement, useEffect } from "react";
import dynamic from "next/dynamic";

import BaseLayouts from "@/layouts/Base";
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
import InformationBannerSkeleton from "@/components/Loading/Landing/InformationBannerSkeleton";
import ChooseStudySkeleton from "@/components/Loading/Landing/ChooseStudySkeleton";
import InformationSkeleton from "@/components/Loading/Landing/InformationSkeleton";
import TestimonySkeleton from "@/components/Loading/Landing/TestimonySkeleton";
import PromotionBannerSkeleton from "@/components/Loading/Landing/PromotionBannerSkeleton";
import FootbarSkeleton from "@/components/Loading/Landing/FootbarSkeleton";

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
        <SuspenseError loadingFallback={<InformationBannerSkeleton />}>
          {inView && <InformationBanner />}
        </SuspenseError>
        <SuspenseError loadingFallback={<ChooseStudySkeleton />}>
          {inView && <ChooseStudyProgram />}
        </SuspenseError>
        <SuspenseError loadingFallback={<TestimonySkeleton />}>
          {inView && <TestimonySection />}
        </SuspenseError>
        <SuspenseError loadingFallback={<InformationSkeleton />}>
          {inView && <InformationSection />}
        </SuspenseError>
        <SuspenseError loadingFallback={<PromotionBannerSkeleton />}>
          {inView && <PromotionBanner />}
        </SuspenseError>
        <SuspenseError loadingFallback={<FootbarSkeleton />}>{inView && <Footbar />}</SuspenseError>
      </div>
    </BaseLayouts>
  );
};

export default Landing;
