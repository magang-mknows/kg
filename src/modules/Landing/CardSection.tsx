import { FC, ReactElement } from "react";
import Image from "next/image";
import IconHero1 from "@/assets/landing/icon-hero1.svg";
import IconHero2 from "@/assets/landing/icon-hero2.svg";
import IconHero3 from "@/assets/landing/icon-hero3.svg";
import IconHero4 from "@/assets/landing/icon-hero4.svg";
import IconHero5 from "@/assets/landing/icon-hero5.svg";

const CardSection: FC = (): ReactElement => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full h-auto justify-center bg-[#106FA4] h-[306px] md:h-[100px] lg:h-[120px] z-[40] mt-2 items-center">
        <div className="flex flex-row lg:my-4 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] my-2">
            <Image
              src={IconHero1}
              alt="icon hero1"
              className="relative ml-5 lg:ml-6 lg:w-[40%] lg:h-[100%] w-[40%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[18px] my-4 ml-20">
            <div>Instruktur</div>
            <div>Profesional</div>
          </div>
        </div>
        <div className="flex flex-row lg:my-4 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] py-2 my-2 ml-4">
            <Image
              src={IconHero5}
              alt="icon hero1"
              className="relative ml-4 lg:ml-3 lg:w-[70%] lg:h-[100%] w-[50%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white lg:text-[12px] text-[16px] lg:text-[18px] my-3 ml-24">
            <div>Perencanaan</div>
            <div>Studi & Karir</div>
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-8">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:w-[70px] lg:h-[70px] my-2">
            <Image
              src={IconHero2}
              alt="icon hero1"
              className="relative px-4 w-[100%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[18px] my-4 ml-20">
            <div>Sertifikasi</div>
            <div>Online</div>
          </div>
        </div>
        <div className="flex flex-row lg:my-4">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:my-2 mx-4 lg:mt-2">
            <Image
              src={IconHero4}
              alt="icon hero1"
              className="relative px-4 w-[100%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[18px] lg:my-3 mt-2 ml-24 ">
            <div>Penyaluran</div>
            <div>Kerja</div>
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-10">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] my-2 mr-4">
            <Image
              src={IconHero3}
              alt="icon hero1"
              className="relative px-4 w-[100%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[18px] my-3 ml-20">
            <div>50.000</div>
            <div>Peserta</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
