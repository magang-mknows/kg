import LoginSkeleton from "@/components/Loading/Auth/LoginSkeleton";
import LandingSkeleton from "@/components/Loading/Landing/LandingSkeleton";
import { useLoginModal } from "@/hooks/Auth/useLoginModal";
import SuspenseError from "@/modules/Common/SuspenseError";
// import HeroSection from "@/modules/Landing/HeroSection";
import Landing from "@/modules/Landing";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Fragment, lazy, ReactElement } from "react";
import BaseLayouts from "@/layouts/Base";

const Modal = lazy(() => import("@/components/Common/Modal"));
const LoginForm = lazy(() => import("@/modules/Auth/Login/Form"));
const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));

const LandingPages: NextPage = (): ReactElement => {
  const { getLoginModal, setLoginModal } = useLoginModal();

  return (
    <Fragment>
      <NextSeo
        title="Landing Page Kampus Gratis"
        description="Kampus grais adalah webisite untuk orang orang yang ingin mengenyam bangku kuliah tanpa biaya namun dengan standard nasional"
      />
      <SuspenseError>
        <Modal withClose hasImage lookup={getLoginModal} onClose={() => setLoginModal(false)}>
          <SuspenseError loadingFallback={<LoginSkeleton />}>
            <LoginForm />
          </SuspenseError>
        </Modal>
      </SuspenseError>
      <Landing />
    </Fragment>
  );
};

export default LandingPages;
