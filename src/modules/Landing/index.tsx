import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";

const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
const MitraSection = lazy(() => import("@/modules/Landing/MitraSection"));
const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));
const SekilasSection = lazy(() => import("@/modules/Landing/SekilasSection"));
const TestimonySection = lazy(() => import("./TestimonySection"));
const InformationBanner = lazy(() => import("@/modules/Landing/InformationBanner"));
const PromotionBanner = lazy(() => import("@/modules/Landing/PromotionBanner"));
const InformationSection = lazy(() => import("@/modules/Landing/InformationSection"));
const ChooseStudyProgram = lazy(() => import("@/modules/Landing/ChooseStudyProgram"));

const Landing: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <HeroSection />
        <MitraSection />
        <SekilasSection />
        <AboutSection />
        <InformationBanner />
        <ChooseStudyProgram />
        <TestimonySection />
        <InformationSection />
        <PromotionBanner />
      </Suspense>
    </BaseLayouts>
  );
};

export default Landing;
