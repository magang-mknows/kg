import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import Modal from "@/components/Common/Modal";
import { useRecoilValue } from "recoil";
import { AuthModalOpen } from "@/stores/Common";

const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
const PatnerSection = lazy(() => import("@/modules/Landing/PatnerSection"));
const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));
const SekilasSection = lazy(() => import("@/modules/Landing/SekilasSection"));
const TestimonySection = lazy(() => import("./TestimonySection"));
const InformationBanner = lazy(() => import("@/modules/Landing/InformationBanner"));
const PromotionBanner = lazy(() => import("@/modules/Landing/PromotionBanner"));
const InformationSection = lazy(() => import("@/modules/Landing/InformationSection"));

const Landing: FC = (): ReactElement => {
  const AuthModalLookup = useRecoilValue(AuthModalOpen);
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <HeroSection />
        <PatnerSection />
        <SekilasSection />
        <AboutSection />
        <InformationBanner />
        <TestimonySection />
        <InformationSection />
        <PromotionBanner />
        <Suspense>
          <Modal title={"Test Modal"} lookup={AuthModalLookup}>
            <>Test Modal</>
          </Modal>
        </Suspense>
      </Suspense>
    </BaseLayouts>
  );
};

export default Landing;
