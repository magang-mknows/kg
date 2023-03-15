import { FC, ReactElement } from "react";
import ContentLayouts from "@/layouts/Content";

// asset
import ImageLanding from "@/assets/landing/landing-img.svg";
import UserKampusGratis from "@/assets/landing/mahasiswa_kampus-gratis.svg";
import IconHero1 from "@/assets/landing/icon-hero1.svg";
import IconHero2 from "@/assets/landing/icon-hero2.svg";
import IconHero3 from "@/assets/landing/icon-hero3.svg";

import Image from "next/image";

const HeroSection: FC = (): ReactElement => {
  return (
    <>
      <div className="z-0">
        <div className="flex flex-col justify-between xl:items-start lg:items-start w-full lg:px-20 px-10 py-20 lg:flex-row md:items-center">
          <ContentLayouts className="w-full dark:text-white">
            <div className="flex flex-col gap-y-4 ">
              <div className="lg:flex-col font-bold space-y-2 text-3xl xl:text-5xl lg:text-5xl md:text-4xl w-full">
                <div>Solusi Pendidikan</div>

                <div>Gratis & Berkualitas</div>
              </div>
              <p className="text-sm my-4 text-[#525252] dark:text-white">
                Platform belajar gratis pertama di Indonesia memungkinkan akses belajar yang mudah
                bagi siapa saja, tanpa terkecuali.
              </p>

              <button className="font-semibold bg-[#3EB449] w-full h-[40px] lg:w-[250px] lg:h-[56px] sm:w-full sm:h-[40px] text-white rounded-[8px] justify-items-end text-sm">
                Coba Sekarang - Gratis
              </button>
            </div>
          </ContentLayouts>

          <ContentLayouts className="sm:flex-col md:flex-col w-full xl:mt-0 lg:mt-[-80px] md:mt-[20px] sm:mt-[20px] xs:mt-[-100px] md:justify-start sm:justify-start xs:justify-start ">
            <div>
              <Image
                src={ImageLanding}
                alt="Image Landing"
                className="z-0 lg:w-[680px] lg:h-[500px] md:w-[600px] md:h-[450px] w-[340px] h-[400px] sm:w-[400px] sm:h-[400px]"
              />
              <div className="flex flex-col items-center bg-white lg:w-[300px] w-[220px] lg:h-[131px] md:w-[260px] sm:w-[240px] rounded-lg mb-2 z-20 relative bottom-40 lg:right-14 ">
                <div className="font-semibold pt-6 dark:text-black">Mahasiswa Kampus Gratis</div>
                <div className="flex flex-row py-2 items-start">
                  <Image
                    src={UserKampusGratis}
                    alt="User Kampus Gratis"
                    className="w-[60%] lg:w-[80%] md:w-[60%]"
                  ></Image>
                  <div className="flex flex-col">
                    <span className="text-pink-400 font-bold">2185+</span>
                    <span className="text-black font-semibold">Mahasiswa</span>
                  </div>
                </div>
              </div>
            </div>
          </ContentLayouts>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row lg:flex-row w-full justify-start lg:justify-around bg-[#106FA4] h-[380px] lg:h-[140px] mt-[-220px] xl:mt-[-234px] lg:mt-[-234px] z-50 ">
        <div className="flex flex-row my-4 lg:my-8 mx-6 lg:ml-0 sm:ml-[30%]">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[94px] h-[94px] lg:w-[80px] lg:h-[80px]">
            <Image
              src={IconHero1}
              alt="icon hero1"
              className="relative lg:w-[26px] lg:h-[40px] h-[50px] lg:left-[26px] left-[34px] top-5"
            />
          </div>
          <div className="flex flex-col text-white text-[22px] lg:text-[20px] my-3 ml-28">
            <div>Instruktur</div>
            <div>Profesional</div>
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-6 lg:ml-0 sm:ml-[30%]">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[94px] h-[94px] lg:w-[80px] lg:h-[80px]">
            <Image
              src={IconHero2}
              alt="icon hero1"
              className="relative lg:w-[26px] lg:h-[40px] h-[50px] lg:left-[26px] left-[30px] top-5"
            />
          </div>
          <div className="flex flex-col text-white text-[22px] lg:text-[20px] my-3 ml-28">
            <div>Instruktur</div>
            <div>Profesional</div>
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-6 lg:ml-0 sm:ml-[30%]">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[94px] h-[94px] lg:w-[80px] lg:h-[80px]">
            <Image
              src={IconHero3}
              alt="icon hero1"
              className="relative lg:w-[26px] lg:h-[40px] h-[50px] lg:left-[26px] left-[30px] top-5"
            />
          </div>
          <div className="flex flex-col text-white text-[22px] lg:text-[20px] my-3 ml-28">
            <div>Instruktur</div>
            <div>Profesional</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
