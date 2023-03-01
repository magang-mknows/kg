import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import BgLanding from "@/assets/bg-landing.png";
import Image from "next/image";

const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));

const Landing: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <HeroSection />
        {/* <AboutSection /> */}
      </Suspense>
    </BaseLayouts>
  );
};

export default Landing;
