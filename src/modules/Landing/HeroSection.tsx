import { FC, ReactElement } from "react";
import ContentLayouts from "@/layouts/Content";

// asset
import ImageLanding from "@/assets/landing-img.svg";
import UserKampusGratis from "@/assets/mahasiswa_kampus-gratis.svg";
import IconHero1 from "@/assets/icon-hero1.svg";
import IconHero2 from "@/assets/icon-hero2.svg";
import IconHero3 from "@/assets/icon-hero3.svg";

// import BgLanding from "bg-landing.png";
import Image from "next/image";

const HeroSection: FC = (): ReactElement => {
  return (
    // <MainLayouts className="w-full my-11 ">
    <>
      <div className="z-0">
        {/* <Image src={BgLanding} alt="" className="bg-auth:bg-landing" /> */}
        <div className="flex flex-col justify-between items-start w-full px-20 py-20 lg:flex-row ">
          <ContentLayouts className="w-full dark:text-white">
            <div className="flex flex-col gap-y-4">
              <h1 className="font-semibold text-3xl lg:text-5xl md:text-4xl">
                <span>Solusi Pendidikan</span>
                <br />
                <span>Gratis & Berkualitas</span>
              </h1>
              <p className="text-sm my-4">
                Platform belajar gratis pertama di Indonesia memungkinkan akses belajar yang mudah
                bagi siapa saja, tanpa terkecuali.
              </p>

              <button className="bg-[#3EB449] w-[250px] h-[56px] text-white rounded-[8px] justify-items-end text-sm">
                Coba Sekarang - Gratis
              </button>
            </div>
          </ContentLayouts>

          <ContentLayouts className="w-full">
            <div>
              <Image src={ImageLanding} alt="Image Landing" className="z-0 w-[680px] h-[500px]" />
              <div className="flex flex-col items-center bg-white w-[300px] h-[131px] rounded-lg mb-2 z-20 relative bottom-40 right-14">
                <div className="font-semibold pt-6">Mahasiswa Kampus Gratis</div>
                <div className="flex flex-row py-2 items-start">
                  <Image
                    src={UserKampusGratis}
                    alt="User Kampus Gratis"
                    className="w-[80%]"
                  ></Image>
                  <div className="flex flex-col">
                    <span className="text-pink-400 font-semibold">2185+</span>
                    <span className="font-semibold">Mahasiswa</span>
                  </div>
                </div>
              </div>
            </div>
          </ContentLayouts>
        </div>
      </div>

      <div className="flex flex-row w-full justify-around bg-[#106FA4] h-[140px] mt-[-230px] z-50 ">
        <div className="flex flex-row my-8 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[80px] h-[80px]">
            <Image
              src={IconHero1}
              alt="icon hero1"
              className="relative w-[26px] h-[40px] left-[26px] top-5"
            />
          </div>
          <div className="flex flex-col text-white text-[20px] my-3 ml-24">
            <div>Instruktur</div>
            <div>Profesional</div>
          </div>
        </div>

        <div className="flex flex-row my-8 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[80px] h-[80px]">
            <Image
              src={IconHero2}
              alt="icon hero1"
              className="relative w-[26px] h-[40px] left-[26px] top-5"
            />
          </div>
          <div className="flex flex-col text-white text-[20px] my-3 ml-24">
            <div>Sertifikasi</div>
            <div>Online</div>
          </div>
        </div>

        <div className="flex flex-row my-8 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[80px] h-[80px]">
            <Image
              src={IconHero3}
              alt="icon hero1"
              className="relative w-[26px] h-[40px] left-[26px] top-5"
            />
          </div>
          <div className="flex flex-col text-white text-[20px] my-3 ml-24">
            <div>Instruktur</div>
            <div>Profesional</div>
          </div>
        </div>
      </div>
    </>
    // </MainLayouts>
  );
};

export default HeroSection;
