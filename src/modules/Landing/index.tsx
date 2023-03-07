import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import Modal from "@/components/Common/Modal";
import { useRecoilValue } from "recoil";
import { AuthModalOpen } from "@/stores/Common";
import LoginForm from "../Auth/Login/Form";
import { ErrorBoundary } from "react-error-boundary";

const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
const PatnerSection = lazy(() => import("@/modules/Landing/PatnerSection"));
const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));
const SekilasSection = lazy(() => import("@/modules/Landing/SekilasSection"));
const TestimonySection = lazy(() => import("./TestimonySection"));
const InformationBanner = lazy(() => import("@/modules/Landing/InformationBanner"));
const PromotionBanner = lazy(() => import("@/modules/Landing/PromotionBanner"));
const InformationSection = lazy(() => import("@/modules/Landing/InformationSection"));
const ChooseStudyProgram = lazy(() => import("@/modules/Landing/ChooseStudyProgram"));

const Landing: FC = (): ReactElement => {
  const getModal = useRecoilValue(AuthModalOpen);
  return (
    <BaseLayouts>
      <ErrorBoundary fallback={<>Error was happen</>}>
        <Suspense fallback={"Skeleton loading...."}>
          <HeroSection />
          <PatnerSection />
          <SekilasSection />
          <AboutSection />
          <InformationBanner />
          <TestimonySection />
          <InformationSection />
          <ChooseStudyProgram />
          <PromotionBanner />
          <Suspense fallback={"Loading..."}>
            <Modal title={"Test Modal"} lookup={getModal}>
              <LoginForm />
            </Modal>
          </Suspense>
        </Suspense>
      </ErrorBoundary>
    </BaseLayouts>
  );
};

export default Landing;
