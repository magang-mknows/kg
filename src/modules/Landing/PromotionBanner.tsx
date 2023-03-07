import Card from "@/layouts/Card";
import { FC, ReactElement } from "react";

import InfoLanding from "@/assets/promotion-landing.svg";

import GlobalButton from "@/components/Common/GlobalButton";

const PromotionBanner: FC = (): ReactElement => {
  return (
    <Card className="" img={InfoLanding} imgWidth={""} imgHeight={""}>
      <div className="flex flex-col gap-[14px] lg:gap-[28px] p-[32px] lg:px-[64px] place-content-center">
        <h1 className="text-[33px] lg:text-[44px] text-white font-semibold">
          Yuk, Mulai Bangun Karirmu Disini!
        </h1>
        <h2 className="text-[18px] lg:text-[20px] text-white font-normal">
          Belajar 100% gratis tanpa batas waktu bersama para mentor yang ahli dibidangnya, tunggu
          apa lagi?
        </h2>
        <GlobalButton
          text="Daftar Sekarang!"
          hasImg={false}
          size="regular"
          className="bg-[#3EB449] leading-6 font-semibold px-20 py-4"
        />
      </div>
    </Card>
  );
};

export default PromotionBanner;
