import Card from "@/layouts/Card";
import { FC, ReactElement } from "react";
import Image from "next/image";

import GlobalButton from "@/components/Common/GlobalButton";

import InfoLanding from "@/assets/info-landing.svg";
import CardDot from "@/assets/card-dot.svg";

const InformationBanner: FC = (): ReactElement => {
  return (
    <Card className="" img={InfoLanding} imgWidth={"w-full"} imgHeight={"h-full"}>
      <div className="flex flex-col lg:leading-[54px] gap-[14px] lg:gap-[28px] p-[32px] lg:px-[64px] place-content-center relative">
        <h1 className="text-[22px] lg:text-[44px] text-white font-semibold text-center lg:text-start">
          Temukan Kemudahan Belajar dengan Model Pembelajaran Fleksibel yang Inovatif
        </h1>
        <GlobalButton
          text="Daftar Sekarang!"
          hasImg={false}
          size="regular"
          className="bg-[#3EB449] leading-6 font-semibold px-20 py-4"
        />

        <Image className="absolute bottom-0 right-0 hidden lg:block" src={CardDot} alt="card-dot" />
      </div>
    </Card>
  );
};

export default InformationBanner;
