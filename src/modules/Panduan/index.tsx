import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import React, { FC, ReactElement, Suspense } from "react";
import HeroSection from "./HeroSection";

const Landing: FC = (): ReactElement => {
  return (
    <div>
      <BaseLayouts>
        <Suspense fallback={<Loading />}>
          <HeroSection />
        </Suspense>
      </BaseLayouts>
    </div>
  );
};

export default Landing;
