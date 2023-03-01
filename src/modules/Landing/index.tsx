import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";

const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));
const SekilasSection = lazy(() => import("@/modules/Landing/SekilasSection"));

const Landing: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <HeroSection />
        <AboutSection />
        <SekilasSection />
      </Suspense>
    </BaseLayouts>
  );
};

export default Landing;
