import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";

const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
const MitraSection = lazy(() => import("@/modules/Landing/MitraSection"));
const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));
const SekilasSection = lazy(() => import("@/modules/Landing/SekilasSection"));
<<<<<<< HEAD
const TestimonySection = lazy(() => import("./TestimonySection"));
=======
const InformationBanner = lazy(() => import("@/modules/Landing/InformationBanner"));
const PromotionBanner = lazy(() => import("@/modules/Landing/PromotionBanner"));
>>>>>>> 78c70dcf986b80c2ad36f8da6c7d1bc21c2f0b52

const Landing: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <HeroSection />
        <MitraSection />
        <SekilasSection />
<<<<<<< HEAD
        <TestimonySection />
=======
        <AboutSection />
        <InformationBanner />
        <PromotionBanner />
>>>>>>> 78c70dcf986b80c2ad36f8da6c7d1bc21c2f0b52
      </Suspense>
    </BaseLayouts>
  );
};

export default Landing;
