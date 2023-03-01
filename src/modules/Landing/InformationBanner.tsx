import Card from "@/layouts/Card";
import { FC, ReactElement } from "react";

import InfoLanding from "@/assets/info-landing.svg";
import CardDot from "@/assets/card-dot.svg";
import GlobalButton from "@/components/Common/GlobalButton";
import Image from "next/image";

const InformationBanner: FC = (): ReactElement => {
  return (
    // <section className={""}>
    <Card className="" img={InfoLanding}>
      <div className="grid col-span-2 gap-[38px] px-[64px] place-content-center relative ">
        <h1 className="text-[33px] lg:text-[44px] text-white font-bold">
          Temukan Kemudahan Belajar dengan Model Pembelajaran Fleksibel yang Inovatif
        </h1>
        <GlobalButton className="" color="green" size="regular" to="/" text={"Lihat Semua"} />
        <Image
          className="absolute bottom-0 right-0 hidden lg:block"
          src={CardDot}
          alt="card-dot"
        ></Image>
      </div>
    </Card>
    // </section>
  );
};

export default InformationBanner;
