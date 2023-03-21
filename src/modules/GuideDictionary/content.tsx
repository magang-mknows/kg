import React, { ReactElement } from "react";
import Image from "next/image";
import CamusEmpty from "@/assets/guide/dictionary-empty.svg";
import search from "@/assets/guide/search.svg";

const ContentSection = (): ReactElement => {
  return (
    <div className="flex flex-col px-6 md:px-8 lg:px10 mt-[30px] mb-[50px]">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className=" text-[50px] font-[700]">Kamus Kampus Gratis </h1>
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
        <Image src={CamusEmpty} alt={""} className={" w-0 lg:w-full h-full"} />
      </div>
    </div>
  );
};

export default ContentSection;
