import React, { ReactElement } from "react";
import Image from "next/image";
import pictureSekilasInfo from "@/assets/landing/picture-landing-sekilas-info.svg";
import yellowSekilasInfo from "@/assets/landing/yellowInfo.svg";
import RedSekilasInfo from "@/assets/landing/redInfo.svg";

const SekilasSection = (): ReactElement => {
  return (
    <>
      <section className=" mt-5 mb-10 bg-green-landing-hero flex flex-col-reverse lg:flex-row justify-between ">
        <div className="relative lg:w-full">
          <div className="banner">
            <div className="relative  z-[99]  mt-[30px] lg:pl-20 px-10">
              <h1 className="title text-[35px] md:text-[40px] lg:text-[44px] font-bold text-[#262626] dark:text-white">
                Sekilas <span className=" text-[#FAB317]">Info</span> Kampus Gratis
              </h1>
              <p className="pt-[50px] align-center text-left lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] dark:text-white">
                <span className="text-[#171717] text-[24px] dark:text-white">Kampus Gratis</span>{" "}
                merupakan sistem manajemen E-learning yang mencantumkan laporan peningkatan atau
                progres pembelajaran mahasiswa layaknya seperti perguruan tinggi.{" "}
              </p>
              <p className="align-center text-left lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] mt-10 dark:text-white ">
                Pengembangan platform pembelajaran ini merupakan salah satu inisiasi dari pendiri PT
                Menara Indonesia atau M-Knows Consulting, yang inginmemberikan solusi pendidikan
                tinggi yang gratis, berkualitas, berkualitas diakses siapapun khususnya kaum
                marginal, dan selalu update layaknya platform Wikipedia.
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
              className="absolute left-0 bottom-40 dark:w-0 lg:-left-10 z-0 "
            />
          </div>
        </div>
        <div className="w-[80%] container flex justify-center my-10 lg:mb-0">
          <div className="image flex justify-center ">
            <Image
              src={pictureSekilasInfo}
              alt={"picture-sekilas-landing"}
              className="lg:w-full lg:h-full h-[100%] w-[70%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SekilasSection;
