import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";

const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
const MitraSection = lazy(() => import("@/modules/Landing/MitraSection"));
const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));
const SekilasSection = lazy(() => import("@/modules/Landing/SekilasSection"));
const TestimonySection = lazy(() => import("./TestimonySection"));
const InformationBanner = lazy(() => import("@/modules/Landing/InformationBanner"));
const PromotionBanner = lazy(() => import("@/modules/Landing/PromotionBanner"));

const Landing: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <HeroSection />
        <MitraSection />
        <SekilasSection />
        <TestimonySection />
        <AboutSection />
        <InformationBanner />
        <PromotionBanner />
      </Suspense>
    </BaseLayouts>
  );
};

export default Landing;
