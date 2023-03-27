import React, { ReactElement } from "react";
import Filter from "./filter";
import Image from "next/image";
import Medal1 from "@/assets/leaderboard/medal-1.svg";
import Medal3 from "@/assets/leaderboard/medal-3.svg";
import Medal from "@/assets/leaderboard/medal.svg";
import Avatar from "@/assets/leaderboard/avatar.svg";

const ContentSection = (): ReactElement => {
  return (
    <div className="mt-[71px] w-full lg:px-[130px] md:px-[100px] px-[60px] mb-10">
      <h1 className="text-center dark:text-white text-black text-28px font-[700] rounded-[8px]">
        Papan Skor
      </h1>
      <div className="card bg-white mt-[39px] w-full rounded-[8px] py-10 ">
        <div className="flex justify-between md:px-10 px-5">
          <Filter />
          <Filter />
        </div>
        <div className="w-full flex justify-center flex-row relative">
          <div className="grid content-end ">
            <div className="bg-[#FEEAA2] h-[209px] w-[190px] text-center rounded-tr-[8px] rounded-tl-[8px]">
              <div className="absolute rounded-full w-28 h-28 top-[76px] left-[330px] outline outline-4 outline-[#67A5C8]">
                <Image src={Avatar} alt={"avatar"} className="w-28 h-28" />
                <Image src={Medal} alt={"medal"} className="top-24 right-[25px] absolute " />
              </div>
              <div className="mt-24 text-[#000000] font-[500] text-[16px]">Ahmad Barudin</div>
              <button className="bg-[#FAB317] text-white rounded-[8px] text-[14px] px-2 py-1 mt-2">
                6877 Poin
              </button>
            </div>
          </div>
          <div className="bg-[#FEF6D0] h-[374px] w-[204px] text-center rounded-tr-[8px] rounded-tl-[8px]">
            <div className="absolute rounded-full w-32 h-32 top-[30px] left-[515px] outline outline-4 outline-[#FBCB50]">
              <Image src={Avatar} alt={"avatar"} className="w-32 h-32" />
              <Image src={Medal1} alt={"medal"} className="top-28 right-[38px] absolute " />
            </div>
            <div className="mt-56 text-[#000000] font-[500] text-[16px]">Ahmad Barudin</div>
            <button className="bg-[#FAB317] text-white rounded-[8px] text-[14px] px-2 py-1 mt-2">
              6877 Poin
            </button>
          </div>
          <div className="grid content-end">
            <div className="bg-[#FEEAA2] h-[209px] w-[190px] text-center rounded-tr-[8px] rounded-tl-[8px]">
              <div className="absolute rounded-full w-28 h-28 top-[76px] left-[715px] outline outline-4 outline-[#6AD26A]">
                <Image src={Avatar} alt={"avatar"} className="w-28 h-28" />
                <Image src={Medal3} alt={"medal"} className="top-24 right-[25px] absolute " />
              </div>
              <div className="mt-24 text-[#000000] font-[500] text-[16px]">Ahmad Barudin</div>
              <button className="bg-[#FAB317] text-white rounded-[8px] text-[14px] px-2 py-1 mt-2">
                6877 Poin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
