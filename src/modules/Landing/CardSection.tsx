import { FC, ReactElement } from "react";
import Image from "next/image";
import IconHero1 from "@/assets/landing/icon-hero1.svg";
import IconHero2 from "@/assets/landing/icon-hero2.svg";
import IconHero3 from "@/assets/landing/icon-hero3.svg";

const CardSection: FC = (): ReactElement => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full h-auto justify-center lg:justify-between bg-[#106FA4] h-[306px] md:h-[100px] lg:h-[140px] z-[40] lg:px-44 mt-2  items-center">
        <div className="flex flex-row  lg:my-8 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px]">
            <Image
              src={IconHero1}
              alt="icon hero1"
              className="relative ml-4 lg:ml-6 lg:w-[40%] lg:h-[100%] w-[50%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[20px] my-3 ml-28">
            <div>Insturktur</div>
            <div>Profesional</div>
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px]">
            <Image
              src={IconHero2}
              alt="icon hero1"
              className="relative px-4 w-[100%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[20px] my-3 ml-28">
            <div>Sertifikasi</div>
            <div>Online</div>
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px]">
            <Image
              src={IconHero3}
              alt="icon hero1"
              className="relative px-4 w-[100%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[20px] my-3 ml-28">
            <div>6000</div>
            <div>Peserta</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
