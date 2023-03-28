import Image from "next/image";
import React, { FC, ReactElement } from "react";
import Avatar from "@/assets/leaderboard/avatar.svg";
import { leaderBoardProps } from "./type";
import PopupModal from "@/components/Common/PopupModal";
import Modal from "@/components/Common/Modal";
import PopupProfil from "@/components/Leaderboard/PopupProfil";
import { usePopupProfilLeaderboard } from "@/hooks/Leaderborad/usePopupProfilLeaderboard";
const RankingSection: FC<leaderBoardProps> = ({ name, img, score, index }): ReactElement => {
  const { setPopupLeaderboardStatus, getPopupLeaderboardStatus } = usePopupProfilLeaderboard();
  return (
    <>
      <div>
        <div className="flex lg:px-[56px] px-3 mt-[15px]">
          <div className="w-full bg-white flex justify-between border-b-[#F5F5F5] border-b-2 px-[20px] rounded-[8px]">
            <div className="flex items-center gap-[30px] p-2">
              <h1 className="font-[400] lg:text-[24px] text-[20px]">{index}</h1>
              <Image
                src={img}
                alt="avatar"
                className="w-[56px] h-[56px] rounded-full overflow-hidden cursor-pointer"
                onClick={() => setPopupLeaderboardStatus(true)}
              />
              <h1 className="font-[600] lg:text-[18px] text-[14px]">{name}</h1>
            </div>
            <div className="flex items-center">
              <h1 className="font-[600] lg:text-[16px] text-[14px] text-[#0B568D]">{score} poin</h1>
            </div>
          </div>
        </div>
      </div>
      <PopupProfil lookup={getPopupLeaderboardStatus} widthModal="!max-w-[900px]">
        <div className="s">
          <h1 className="mb-5 text-[#737373] font-[500] text-[18px]">
            Rank <span className="text-[#106FA4] font-[600] text-[28px]">4</span> Global
          </h1>
          <div className="flex flex-row outline outline-[#E5E5E5] bg-[#FAFAFA] rounded-[8px] px-3  gap-8  h-[125px] items-center">
            <Image src={Avatar} alt={"avatar"} className="w-24 h-24" />
            <div className="">
              <p className="text-[#171717] font-[600] text-[24px]">Edhit Expilen</p>
              <div className="flex flex-row text-[#737373] text-[20px] font-[500]">
                <p>Blockchains</p>
                <p>Semster 5</p>
              </div>
            </div>
            <div className="flex item-center">
              <button className="bg-[#FAB317] text-white text-[16px] font-[600] rounded-[8px] px-2 py-1">
                7000 Poin
              </button>
            </div>
          </div>
        </div>
      </PopupProfil>
    </>
  );
};

export default RankingSection;
