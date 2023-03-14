import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { ErrorBoundary } from "react-error-boundary";
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
  return (
    <BaseLayouts>
      <ErrorBoundary fallback={<>Error was happen</>}>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </ErrorBoundary>
    </BaseLayouts>
  );
};

export default Landing;
