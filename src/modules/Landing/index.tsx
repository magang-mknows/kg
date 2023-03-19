import { FC, ReactElement, lazy, useEffect, useState } from "react";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "../Common/SuspenseError";
import Loading from "@/components/Loading";

const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
const PatnerSection = lazy(() => import("@/modules/Landing/PatnerSection"));
const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));
const SekilasSection = lazy(() => import("@/modules/Landing/SekilasSection"));
const TestimonySection = lazy(() => import("./TestimonySection"));
const InformationBanner = lazy(() => import("@/modules/Landing/InformationBanner"));
const PromotionBanner = lazy(() => import("@/modules/Landing/PromotionBanner"));
const InformationSection = lazy(() => import("@/modules/Landing/InformationSection"));
const ChooseStudyProgram = lazy(() => import("@/modules/Landing/ChooseStudyProgram"));
const Footbar = lazy(() => import("@/components/Footbar"));

const Landing: FC = (): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;
  return (
    <BaseLayouts>
      <SuspenseError>
        <HeroSection />
      </SuspenseError>

      <SuspenseError>
        <PatnerSection />
      </SuspenseError>

      <SuspenseError>
        <SekilasSection />
      </SuspenseError>

      <SuspenseError>
        <AboutSection />
      </SuspenseError>

      <SuspenseError>
        <InformationBanner />
      </SuspenseError>

      <SuspenseError>
        <ChooseStudyProgram />
      </SuspenseError>

      <SuspenseError>
        <TestimonySection />
      </SuspenseError>

      <SuspenseError>
        <InformationSection />
      </SuspenseError>

      <SuspenseError>
        <PromotionBanner />
      </SuspenseError>

      <SuspenseError>
        <Footbar />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default Landing;
