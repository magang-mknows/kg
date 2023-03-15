import React, { ReactElement } from "react";
import Image from "next/image";
import pictureSekilasInfo from "@/assets/landing/picture-landing-sekilas-info.svg";
import yellowSekilasInfo from "@/assets/landing/yellowInfo.svg";
import RedSekilasInfo from "@/assets/landing/redInfo.svg";

const SekilasSection = (): ReactElement => {
  return (
    <>
      <h1 className="title text-[35px] md:text-[40px] lg:text-[44px] font-bold px-4 text-[#262626] dark:text-white">
        Sekilas <span className=" text-[#FAB317]">Info</span> Kampus Gratis
      </h1>
      <section className="mx-20 my-10 bg-green-landing-hero mb-[10px] flex flex-col-reverse lg:flex-row justify-between ">
        <div className="relative w-full">
          <div className="banner grid place-content-center">
            <div className="absoulte z-20 lg:mt-[100px] mt-[20px]">
              <p className="align-center text-left lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] dark:text-white">
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
            </div>
            <Image
              src={yellowSekilasInfo}
              alt={"Yellow-sekilas-info"}
              className="relative dark:w-0 lg:-left-10 lg:-top-48 lg:z-10 "
            />
          </div>

          <Image
            src={RedSekilasInfo}
            alt={"Red-sekilas-info"}
            className="lg:absolute lg:-bottom-14 lg:-right-32 lg:opacity-100 opacity-0 "
          />
        </div>
        <div className="container mx-auto flex lg:justify-center justify-start my-10 lg:mb-0">
          <div className="image flex justify-center ">
            <Image
              src={pictureSekilasInfo}
              alt={"picture-sekilas-landing"}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SekilasSection;
