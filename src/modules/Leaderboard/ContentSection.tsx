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
        <div className="w-full flex justify-center flex-row  md:mt-0 mt-10 md:px-0 ">
          <div className="grid content-end relative ">
            <div className="bg-[#FEEAA2] lg:h-[209px] lg:w-[190px] md:h-[180px] md:w-[165px] h-[145px] w-[150px] text-center rounded-tr-[8px] rounded-tl-[8px]">
              <div className="absolute lg:top-[90px] lg:left-[40px] md:top-[50px] md:left-[30px] top-[55px] left-[34px]">
                <div className="rounded-full outline outline-4 outline-[#67A5C8]">
                  <Image
                    src={Avatar}
                    alt={"avatar"}
                    className="lg:w-28 lg:h-28 md:w-24 md:h-24 w-20 h-20"
                  />
                  <Image
                    src={Medal}
                    alt={"medal"}
                    className="lg:top-24 lg:right-[25px] md:top-20 md:right-[22px] top-[65px] right-[20px] lg:w-[65px] md:w-[50px] w-[45px] absolute "
                  />
                </div>
              </div>
              <div className="lg:mt-24 md:mt-[90px] mt-[70px] text-[#000000] font-[500] lg:text-[16px] md:text-[14px] text-[12px]">
                Ahmad Barudin
              </div>
              <button className="bg-[#FAB317] text-white rounded-[8px] lg:text-[14px] md:text-[12px] text-[10px] px-2 py-1 mt-2">
                6877 Poin
              </button>
            </div>
          </div>
          <div className="grid content-center relative">
            <div className="bg-[#FEF6D0] lg:h-[374px] lg:w-[204px] md:h-[280px] md:w-[180px] h-[240px] w-[150px] text-center rounded-tr-[8px] rounded-tl-[8px]">
              <div className="absolute lg:top-[30px] lg:left-[40px] md:top-[5px] md:left-[36px] top-[0px] left-[32px]">
                <div className="rounded-full lg:w-32 lg:h-32 md:w-[105px] md:h-[105px] outline outline-4 outline-[#FBCB50]">
                  <Image
                    src={Avatar}
                    alt={"avatar"}
                    className="lg:w-32 lg:h-32 md:w-[105px] md:h-[105px] w-[88px] h-[88px]"
                  />
                  <Image
                    src={Medal1}
                    alt={"medal"}
                    className="lg:top-28 lg:right-[38px] md:top-[90px] md:right-[34px] top-[80px] right-[28px] lg:w-[50px] md:w-[38px] w-[33px] absolute "
                  />
                </div>
              </div>
              <div className="lg:mt-56 md:mt-[160px] mt-32 text-[#000000] font-[500] lg:text-[16px] md:text-[14px] text-[12px]">
                Ahmad Barudin
              </div>
              <button className="bg-[#FAB317] text-white rounded-[8px] lg:text-[14px] md:text-[12px] text-[10px] px-2 py-1 mt-2">
                6877 Poin
              </button>
            </div>
          </div>
          <div className="grid content-end relative ">
            <div className="bg-[#FEEAA2] lg:h-[209px] lg:w-[190px] md:h-[180px] md:w-[165px] h-[145px] w-[150px] text-center rounded-tr-[8px] rounded-tl-[8px]">
              <div className="absolute lg:top-[90px] lg:left-[40px] md:top-[50px] md:left-[30px] top-[55px] left-[34px]">
                <div className="rounded-full outline outline-4 outline-[#6AD26A]">
                  <Image
                    src={Avatar}
                    alt={"avatar"}
                    className="lg:w-28 lg:h-28 md:w-24 md:h-24 w-20 h-20"
                  />
                  <Image
                    src={Medal3}
                    alt={"medal"}
                    className="lg:top-24 lg:right-[25px] md:top-20 md:right-[22px] top-[65px] right-[20px] lg:w-[65px] md:w-[50px] w-[45px] absolute "
                  />
                </div>
              </div>
              <div className="lg:mt-24 md:mt-[90px] mt-[70px] text-[#000000] font-[500] lg:text-[16px] md:text-[14px] text-[12px]">
                Ahmad Barudin
              </div>
              <button className="bg-[#FAB317] text-white rounded-[8px] lg:text-[14px] md:text-[12px] text-[10px] px-2 py-1 mt-2">
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
