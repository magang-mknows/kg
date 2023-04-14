import Card from "@/layouts/Card";
import { FC, ReactElement } from "react";

import InfoLanding from "@/assets/landing/promotion-landing.webp";
import GlobalButton from "@/components/Common/GlobalButton";

const PromotionBanner: FC = (): ReactElement => {
  return (
    <Card img={InfoLanding} imgWidth={"100px"} imgHeight={"100px"}>
      <div className="flex flex-col gap-[14px] lg:gap-[28px] p-[32px] lg:px-[64px] place-content-center">
        <h1 className="text-[33px] lg:text-[44px] text-white font-semibold">
          Yuk, Mulai Bangun Karirmu Disini!
        </h1>
        <h2 className="text-[18px] lg:text-[20px] text-white font-normal">
          Belajar 100% gratis tanpa batas waktu dapat dikonversi SKS, dengan mentor ahli dibidangnya
        </h2>
        <p className="text-white font-semibold text-2xl px-6">Ayooo Tunggu Apa lagi??</p>
        <GlobalButton
          to="/auth/register"
          text="Daftar Sekarang!"
          hasImg={false}
          size="regular"
          className="bg-[#3EB449] animate-bounce leading-6 font-semibold px-0 lg:px-20 py-4 my-4"
        />
      </div>
    </Card>
  );
};

export default PromotionBanner;
