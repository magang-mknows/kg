import React, { ReactElement } from "react";
import Image from "next/image";
import PanduanHero from "@/assets/guide/video-guide.svg";
import search from "@/assets/guide/search.svg";

const HeroSection = (): ReactElement => {
  return (
    <div className="lg:grid lg:grid-cols-2 px-6 md:px-8 w-full lg:px-10 mt-[30px] mb-[50px]">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className=" md:text-[50px] text-[40px] font-[700]">Video panduan </h1>
          <p className="text-[14px] font-[400] text-[#737373] dark:text-white">
            Berupa video tutorial penggunaan dan fungsi fitur yang ada di Website KG
          </p>
        </div>
        <div className="seacrh lg:w-[700px] h-[56px] w-full bg-neautral-100 dark:bg-[#232529] rounded-[8px] mt-[48px] flex items-center gap-4  ">
          <Image src={search} alt={"search"} className={"ml-[24px]"} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari informasi"
            className=" bg-transparent w-full focus:outline-none"
          />
        </div>
      </div>
      <div className="col-span-1 grid place-content-end ">
        <Image src={PanduanHero} alt={""} className={" w-0 lg:w-full h-full"} />
      </div>
    </div>
  );
};

export default HeroSection;
