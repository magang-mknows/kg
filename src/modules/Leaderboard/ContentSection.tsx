import React, { ReactElement } from "react";
import Image from "next/image";
import Filter from "./filter";
import RankingSection from "./RankingSection";
import Pagination from "../Event/Common/Pagination";
import PopupProfil from "@/components/Leaderboard/PopupProfil";
import Medal1 from "@/assets/leaderboard/medal-1.svg";
import Medal3 from "@/assets/leaderboard/medal-3.svg";
import Medal from "@/assets/leaderboard/medal.svg";
import Crown from "@/assets/leaderboard/crown.svg";
import Avatar from "@/assets/leaderboard/avatar.svg";
import { usePopupProfilLeaderboard, usePopupGetUser, useGetAllLeaderboard } from "./hooks";

const ContentSection = (): ReactElement => {
  const { data } = useGetAllLeaderboard();
  console.log("tes", data?.data);
  const getRank = data?.data;
  const { setPopupLeaderboardStatus, getPopupLeaderboardStatus } = usePopupProfilLeaderboard();
  const { setPopupUser, getPopupUser } = usePopupGetUser();
  return (
    <div className="mt-[71px] w-full lg:px-[130px] md:px-[100px] px-3  mb-10 dark:bg-[#222529]">
      <h1 className="text-center dark:text-white text-black text-28px font-[700] rounded-[8px]">
        Papan Skor
      </h1>
      <div className="card bg-white dark:bg-[#1B1E21] mt-[39px] w-full rounded-[8px] py-10 ">
        <div className="flex justify-between md:px-10 px-5">
          <Filter />
          <Filter />
        </div>
        <div className="w-full flex justify-center items-end flex-row mt-10 md:px-0">
          {getRank
            ?.sort((a: any, b: any) => {
              return b.averageScore - a.averageScore;
            })
            ?.map((item: any, index: any) => {
              return index == 1 ? (
                <div className="relative lg:-top-72 md:-top-60 sm:-top-52 -top-44 order-1">
                  <div className="bg-[#FEEAA2] dark:bg-[#17A2B8] lg:h-[209px] lg:w-[190px] md:h-[180px] md:w-[165px] sm:h-[145px] sm:w-[150px] h-[125px] w-[120px] text-center rounded-tr-[8px] rounded-tl-[8px]">
                    <div className="absolute lg:top-[40px] lg:left-[40px] md:top-[50px] md:left-[32px] sm:top-[20px] sm:left-[34px] top-6 left-7">
                      <div className="rounded-full outline outline-4 outline-[#67A5C8]">
                        <Image
                          src={Avatar}
                          alt={"avatar"}
                          className="lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 w-16 h-16 cursor-pointer"
                          onClick={() => {
                            setPopupUser(item);
                            setPopupLeaderboardStatus(true);
                          }}
                        />
                        <Image
                          src={Medal}
                          alt={"medal"}
                          className="lg:top-24 lg:right-[25px] md:top-20 md:right-[22px] sm:top-[65px] sm:right-[20px] lg:w-[65px] md:w-[50px] sm:w-[45px] w-10 top-[55px] right-[13px] absolute "
                        />
                      </div>
                    </div>
                    <div className="relative lg:-bottom-[115px] md:-bottom-[100px] sm:-bottom-[70px] -bottom-14">
                      <div className="lg:mt-24 md:mt-[90px] mt-[70px] text-[#000000] font-[500] lg:text-[16px] md:text-[14px] text-[12px]">
                        {item.student_name}
                      </div>
                      <button className="bg-[#FAB317]  text-white rounded-[8px] lg:text-[14px] md:text-[12px] text-[10px] px-2 py-1 mt-2">
                        {item.averageScore} Poin
                      </button>
                    </div>
                  </div>
                </div>
              ) : index == 0 ? (
                <div className="relative lg:-top-72 md:-top-60 sm:-top-52 -top-44 order-2">
                  <div className="bg-[#FEF6D0] dark:bg-[#61b3bf]   lg:h-[374px] lg:w-[204px] md:h-[280px] md:w-[180px] sm:h-[240px] sm:w-[150px] h-[220px] w-[120px] text-center rounded-tr-[8px] rounded-tl-[8px] ">
                    <div className="absolute lg:top-[280px] lg:left-[40px] md:top-[180px] md:left-[36px] sm:top-[140px] sm:left-[32px] top-36 left-7">
                      <div className="rounded-full lg:w-32 lg:h-32 md:w-[105px] md:h-[105px] outline outline-4 outline-[#FBCB50] ">
                        <Image
                          src={Avatar}
                          alt={"avatar"}
                          className="lg:w-32 lg:h-32 md:w-[105px] md:h-[105px] sm:w-[88px] sm:h-[88px] w-[70px] h-[70px] cursor-pointer"
                          onClick={() => {
                            setPopupUser(item);
                            setPopupLeaderboardStatus(true);
                          }}
                        />
                        <Image
                          src={Crown}
                          alt="crown"
                          className="absolute lg:-top-9 lg:right-11 lg:w-10 md:-top-8 md:right-8 md:w-9 sm:-top-6 sm:right-7 sm:w-7 w-7 -top-6 right-5"
                        />
                        <Image
                          src={Medal1}
                          alt={"medal"}
                          className="lg:top-28 lg:right-[30px] md:top-[90px] md:right-[27px] sm:top-[74px] sm:right-[22px] lg:w-[65px] md:w-[50px] sm:w-[45px] w-10 top-[60px] right-[16px] absolute "
                        />
                      </div>
                    </div>
                    <div className="relative lg:top-[240px] md:-bottom-[170px] sm:-bottom-[145px] -bottom-32">
                      <div className="lg:mt-56 md:mt-[160px] mt-32 text-[#000000] font-[500] lg:text-[16px] md:text-[14px] text-[12px]">
                        {item.student_name}
                      </div>
                      <button className="bg-[#FAB317] text-white rounded-[8px] lg:text-[14px] md:text-[12px] text-[10px] px-2 py-1 mt-2">
                        {item.averageScore} Poin
                      </button>
                    </div>
                  </div>
                </div>
              ) : index == 2 ? (
                <div className="relative lg:-top-72 md:-top-60 sm:-top-52 -top-44 order-3">
                  <div className="bg-[#FEEAA2] dark:bg-[#17A2B8] lg:h-[209px] lg:w-[190px] md:h-[180px] md:w-[165px] sm:h-[145px] sm:w-[150px] h-[125px] w-[120px] text-center rounded-tr-[8px] rounded-tl-[8px]">
                    <div className="absolute lg:top-[40px] lg:left-[40px] md:top-[50px] md:left-[32px] sm:top-[20px] sm:left-[34px] top-6 left-7">
                      <div className="rounded-full outline outline-4 outline-[#6AD26A]">
                        <Image
                          src={Avatar}
                          alt={"avatar"}
                          className="lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 w-16 h-16 cursor-pointer"
                          onClick={() => {
                            setPopupUser(item);
                            setPopupLeaderboardStatus(true);
                          }}
                        />
                        <Image
                          src={Medal3}
                          alt={"medal"}
                          className="lg:top-24 lg:right-[25px] md:top-20 md:right-[22px] sm:top-[65px] sm:right-[20px] lg:w-[65px] md:w-[50px] sm:w-[45px] w-10 top-[55px] right-[13px] absolute "
                        />
                      </div>
                    </div>
                    <div className="relative lg:top-[115px] md:-bottom-[100px] sm:-bottom-[70px] -bottom-14">
                      <div className="lg:mt-24 md:mt-[90px] mt-[70px] text-[#000000] font-[500] lg:text-[16px] md:text-[14px] text-[12px]">
                        {item.student_name}
                      </div>
                      <button className="bg-[#FAB317] text-white rounded-[8px] lg:text-[14px] md:text-[12px] text-[10px] px-2 py-1 mt-2">
                        {item.averageScore} Poin
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              );
            })}
        </div>
        <RankingSection />
        <div className="flex justify-center mt-0 ">
          <Pagination />
        </div>
      </div>
      <PopupProfil
        onClose={() => {
          setPopupLeaderboardStatus(false);
        }}
        lookup={getPopupLeaderboardStatus}
        widthModal="!max-w-[748px]"
        {...getPopupUser}
      />
    </div>
  );
};

export default ContentSection;
