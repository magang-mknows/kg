import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";

const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
//const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));
const SekilasSection = lazy(() => import("@/modules/Landing/SekilasSection"));
const TestimonySection = lazy(() => import("./TestimonySection"));

const Landing: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <HeroSection />
        <SekilasSection />
        <TestimonySection />
      </Suspense>
    </BaseLayouts>
  );
};

export default Landing;
