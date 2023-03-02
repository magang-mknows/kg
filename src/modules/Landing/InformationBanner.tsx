import Card from "@/layouts/Card";
import { FC, ReactElement } from "react";
import Image from "next/image";

import GlobalButton from "@/components/Common/GlobalButton";

import InfoLanding from "@/assets/info-landing.svg";
import CardDot from "@/assets/card-dot.svg";

const InformationBanner: FC = (): ReactElement => {
  return (
    <Card className="" img={InfoLanding} imgWidth={"w-full"} imgHeight={"h-full"}>
      <div className="grid leading-[54px] gap-[28px] px-[64px] place-content-center relative">
        <h1 className="text-[33px] lg:text-[44px] text-white font-semibold">
          Temukan Kemudahan Belajar dengan Model Pembelajaran Fleksibel yang Inovatif
        </h1>
        <GlobalButton color="green" size="regular" to="/" text={"Lihat Semua"} />
        <Image className="absolute bottom-0 right-0 hidden lg:block" src={CardDot} alt="card-dot" />
      </div>
    </Card>
  );
};

export default InformationBanner;
