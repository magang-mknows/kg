import Card from "@/layouts/Card";
import { FC, ReactElement } from "react";
import Image from "next/image";

import GlobalButton from "@/components/Common/GlobalButton";

import InfoLanding from "@/assets/info-landing.svg";
import CardDot from "@/assets/card-dot.svg";

const InformationBanner: FC = (): ReactElement => {
  return (
    <Card className="" img={InfoLanding} imgWidth={"w-full"} imgHeight={"h-full"}>
      <div className="grid lg:leading-[54px] gap-[14px] lg:gap-[28px] p-[32px] lg:px-[64px] place-content-center relative">
        <h1 className="text-[22px] lg:text-[44px] text-white font-bold text-center lg:text-start">
          Temukan Kemudahan Belajar dengan Model Pembelajaran Fleksibel yang Inovatif
        </h1>
        <GlobalButton
          color="green"
          size="regular"
          to="/"
          text={"Lihat Semua"}
          className="justify-center"
        />
        <Image className="absolute bottom-0 right-0 hidden " src={CardDot} alt="card-dot" />
      </div>
    </Card>
  );
};

export default InformationBanner;
