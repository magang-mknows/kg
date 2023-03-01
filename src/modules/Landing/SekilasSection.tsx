import React, { FC, ReactElement } from "react";
import Image from "next/image";
import pictureSekilasInfo from "@/assets/picture-landing-sekilas info.svg";
import yellowSekilasInfo from "@/assets/yellowInfo.svg";
import RedSekilasInfo from "@/assets/redInfo.svg";

const SekilasSection = (): ReactElement => {
  return (
    <section className={`grid lg:grid-cols-2 bg-green-landing-hero`}>
      <div className="col-span-1 my-auto ">
        <div className="banner grid place-content-center relative">
          <h1 className="title text-[44px] font-bold text-center lg:text-left text-[#262626]">
            Sekilas <span className=" text-[#FAB317]">Info</span> Kampus Gratis
          </h1>
          <p className="align-center text-center lg:text-left mt-[50px] text-[#262626] text-[18px]">
            <span className="text-[#171717] text-[24px]">Kampus Gratis</span> merupakan sistem
            manajemen E-learning yang <br />
            mencantumkan laporan peningkatan atau progres pembelajaran <br />
            mahasiswa layaknya seperti perguruan tinggi.{" "}
          </p>
          <p className="align-center text-center lg:text-left text-[#262626] text-[18px] mt-10">
            Pengembangan platform pembelajaran ini merupakan salah satu inisiasi dari pendiri PT{" "}
            <br />
            Menara Indonesia atau M-Knows Consulting, yang ingin memberikan solusi pendidikan tinggi{" "}
            <br />
            yang gratis, berkualitas, bisa diakses siapapun khususnya kaum marginal, dan selalu{" "}
            <br />
            update layaknya platform Wikipedia.
          </p>
        </div>
        <Image
          src={yellowSekilasInfo}
          alt={"Yellow-sekilas-info"}
          className="absolute -left-10 top-96"
        />
        <Image
          src={RedSekilasInfo}
          alt={"Red-sekilas-info"}
          className="absolute bottom-32 left-96"
        />
      </div>
      <div className="container mx-auto col-span-1 w-full grid place-content-center ">
        <div className="image">
          <Image src={pictureSekilasInfo} alt={"picture-sekilas-landing"} />
        </div>
      </div>
    </section>
  );
};

export default SekilasSection;
