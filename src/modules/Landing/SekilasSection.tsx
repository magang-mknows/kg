import React, { ReactElement } from "react";
import Image from "next/image";
import pictureSekilasInfo from "@/assets/picture-landing-sekilas info.svg";
import yellowSekilasInfo from "@/assets/yellowInfo.svg";
import RedSekilasInfo from "@/assets/redInfo.svg";
import MainLayouts from "@/layouts/Main";

const SekilasSection = (): ReactElement => {
  return (
    <MainLayouts>
      <section className=" bg-green-landing-hero mb-[10px] flex flex-col-reverse lg:flex-row justify-center  ">
        <div className=" my-auto relative w-full">
          <div className="banner grid place-content-center">
            <h1 className="title text-[35px] md:text-[40px] lg:text-[44px] font-bold text-left text-[#262626] dark:text-white">
              Sekilas <span className=" text-[#FAB317]">Info</span> Kampus Gratis
            </h1>
            <div className="absoulte z-20 lg:mt-[100px] mt-[20px]">
              <p className="align-center text-left lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] dark:text-white">
                <span className="text-[#171717] text-[24px] dark:text-white">Kampus Gratis</span>{" "}
                merupakan sistem manajemen E-learning yang <br />
                mencantumkan laporan peningkatan atau progres pembelajaran <br />
                mahasiswa layaknya seperti perguruan tinggi.{" "}
              </p>
              <p className="align-center text-left lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] mt-10 dark:text-white ">
                Pengembangan platform pembelajaran ini merupakan salah satu inisiasi <br /> dari
                pendiri PT Menara Indonesia atau M-Knows Consulting, yang ingin <br /> memberikan
                solusi pendidikan tinggi yang gratis, berkualitas, bisa <br /> diakses siapapun
                khususnya kaum marginal, dan selalu update layaknya <br /> platform Wikipedia.
              </p>
            </div>
            <Image
              src={yellowSekilasInfo}
              alt={"Yellow-sekilas-info"}
              className="relative lg:-left-10 lg:-top-48 lg:z-10 "
            />
          </div>

          <Image
            src={RedSekilasInfo}
            alt={"Red-sekilas-info"}
            className="lg:absolute lg:-bottom-14 lg:-right-32 lg:opacity-100 opacity-0 "
          />
        </div>
        <div className="container mx-auto flex justify-center mb-16 lg:mb-0">
          <div className="image flex justify-center ">
            <Image
              src={pictureSekilasInfo}
              alt={"picture-sekilas-landing"}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </MainLayouts>
  );
};

export default SekilasSection;
