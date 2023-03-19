import { FC, ReactElement, useEffect, useState } from "react";
import BaseLayouts from "@/layouts/Base";
import Loading from "@/components/Loading";
import Footbar from "@/components/Footbar";
import AboutSection from "./AboutSection";
import ChooseStudyProgram from "./ChooseStudyProgram";
import HeroSection from "./HeroSection";
import InformationBanner from "./InformationBanner";
import InformationSection from "./InformationSection";
import PatnerSection from "./PatnerSection";
import PromotionBanner from "./PromotionBanner";
import SekilasSection from "./SekilasSection";
import TestimonySection from "./TestimonySection";

const Landing: FC = (): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;
  return (
    <BaseLayouts>
      <HeroSection />

      <PatnerSection />

      <SekilasSection />

      <AboutSection />

      <InformationBanner />

      <ChooseStudyProgram />

      <TestimonySection />

      <InformationSection />

      <PromotionBanner />

      <Footbar />
    </BaseLayouts>
  );
};

export default Landing;
