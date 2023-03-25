import React, { ReactElement } from "react";
import Image from "next/image";
import pictureSekilasInfo from "@/assets/landing/picture-landing-sekilas-info.svg";
import yellowSekilasInfo from "@/assets/landing/yellowInfo.svg";
import RedSekilasInfo from "@/assets/landing/redInfo.svg";

const SekilasSection = (): ReactElement => {
  return (
    <>
      <div className="flex w-full lg:pl-20 md:px-8 px-[70px] pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#262626] dark:text-white lg:text-start md:text-start text-center">
          Sekilas <span className="mx-2 text-[#FAB317]"> Info </span>
          Kampus Gratis
        </h1>
      </div>
      <section className="flex flex-col mb-20 lg:mb-10 lg:flex-row justify-between ">
        <div className="relative lg:w-full h-full">
          <div className="px-[70px] lg:relative z-[99]">
            <p className="pt-[50px] align-center text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] dark:text-white">
              <span className="text-gray-600 text-[24px] dark:text-white font-semibold">
                Kampus Gratis
              </span>{" "}
              merupakan sistem manajemen E-learning yang mencantumkan laporan peningkatan atau
              progres pembelajaran mahasiswa layaknya seperti perguruan tinggi.{" "}
            </p>
            <p className="align-center text-left lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] mt-5 dark:text-white">
              Pengembangan platform pembelajaran ini merupakan salah satu inisiasi dari pendiri PT
              Menara Indonesia atau M-Knows Consulting, yang inginmemberikan solusi pendidikan
              tinggi yang gratis, berkualitas, berkualitas diakses siapapun khususnya kaum marginal,
              dan selalu update layaknya platform Wikipedia.
            </p>
            <Image
              src={RedSekilasInfo}
              alt={"Red-sekilas-info"}
              className="lg:absolute lg:right-0 lg:opacity-100 opacity-0 "
            />
          </div>
          <Image
            src={yellowSekilasInfo}
            alt={"Yellow-sekilas-info"}
            className="lg:flex lg:absolute lg:top-[100px] hidden left-0 bottom-40 dark:w-0 lg:right-15 z-0 "
          />
        </div>
        <div className="w-[80%] h-full container flex justify-center items-center mb-10 ml-4">
          <div className="flex justify-center">
            <Image
              src={pictureSekilasInfo}
              alt={"picture-sekilas-landing"}
              className="lg:w-full lg:h-full pb-10 h-[100%] w-[70%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SekilasSection;
