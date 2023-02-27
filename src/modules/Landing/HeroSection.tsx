import { FC, ReactElement } from "react";
import MainLayouts from "@/layouts/Main";
import ContentLayouts from "@/layouts/Content";

// asset
import Girl from "@/assets/hero-section/girl.png"
import Icon1 from "@/assets/hero-section/icon-hero1.png"
import Icon4 from "@/assets/hero-section/icon-hero4.png"
import Image from "next/image";

const HeroSection: FC = (): ReactElement => {
  return (
    <MainLayouts className="w-full my-11 ">
        <div className="flex flex-col ml-20 text-black dark:text-white">
          <div>
            <h1 className="font-semibold text-5xl">
              <span>Solusi Pendidikan</span>
              <br /> 
              <span>Gratis & Berkualitas</span>
            </h1>
            <p className="text-sm my-4">
            Platform belajar gratis pertama di Indonesia memungkinkan akses belajar yang mudah bagi siapa saja, tanpa terkecuali.
            </p>
          </div>
        </div>

        <div className="flex-col items-center pl-20">
          <div className="relative ml-20">
            
            <Image src={Icon1} className="z-10 w-16 h-6 absolute top-20 left-4" alt="icon1" />
            <Image src={Icon4} className="z-10 w-[200px] h-[200px] absolute top-[40px] left-40" alt="icon4" />
            <Image src={Girl} className="z-0 w-[280px] h-96 static left-[20px]" alt="girl-hero" />
            
          </div>
        </div>
    </MainLayouts>
  );
};

export default HeroSection;
