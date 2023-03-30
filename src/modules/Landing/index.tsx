import { FC, ReactElement, useEffect } from "react";

import BaseLayouts from "@/layouts/Base";
import dynamic from "next/dynamic";
import SuspenseError from "../Common/SuspenseError";
import { useInView } from "react-intersection-observer";

const HeroSection = dynamic(() => import("./HeroSection"));
const CardSection = dynamic(() => import("./CardSection"));
const PatnerSection = dynamic(() => import("./PatnerSection"));
const SekilasSection = dynamic(() => import("./SekilasSection"));
const AboutSection = dynamic(() => import("./AboutSection"));
const ChooseStudyProgram = dynamic(() => import("./ChooseStudyProgram"));
const InformationBanner = dynamic(() => import("./InformationBanner"));
const InformationSection = dynamic(() => import("./InformationSection"));
const PromotionBanner = dynamic(() => import("./PromotionBanner"));
const TestimonySection = dynamic(() => import("./TestimonySection"));
const Footbar = dynamic(() => import("@/components/Footbar"));

import HeroSkeleton from "@/components/Loading/Landing/HeroSkeleton";

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
        <SuspenseError>{inView && <CardSection />}</SuspenseError>
        <SuspenseError>{inView && <PatnerSection />}</SuspenseError>
        <SuspenseError>{inView && <SekilasSection />}</SuspenseError>
        <SuspenseError>{inView && <AboutSection />}</SuspenseError>
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
