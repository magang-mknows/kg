import Image from "next/image";
import React, { FC, ReactElement } from "react";
import Avatar from "@/assets/leaderboard/avatar.svg";
import { leaderBoardRankProps } from "@/stores/Leaderboard/type";
import PopupProfil from "@/components/Leaderboard/PopupProfil";
import { usePopupProfilLeaderboard } from "@/hooks/Leaderborad/usePopupProfilLeaderboard";
import { useRankLeaderboard } from "@/hooks/Leaderborad/useRankLeaderboard";

const RankingSection: FC = (): ReactElement => {
  const { setPopupLeaderboardStatus, getPopupLeaderboardStatus } = usePopupProfilLeaderboard();
  const { getRank } = useRankLeaderboard();
  return (
    <div className="relative lg:-top-64 md:-top-44 -top-36">
      {getRank
        .slice()
        .sort((a, b) => {
          return b.score - a.score;
        })
        .map((x, y) => {
          return (
            y >= 3 && (
              <>
                <div key={y}>
                  <div className="flex lg:px-[56px] px-3 mt-[15px]">
                    <div className="w-full bg-white flex justify-between border-b-[#F5F5F5] border-b-2 px-[20px] rounded-[8px]">
                      <div className="flex items-center gap-[30px] p-2">
                        <h1 className="font-[400] lg:text-[24px] text-[20px]">{x.index}</h1>
                        <Image
                          src={x.img}
                          alt="avatar"
                          className="w-[56px] h-[56px] rounded-full overflow-hidden cursor-pointer"
                          onClick={() => setPopupLeaderboardStatus(true)}
                        />
                        <h1 className="font-[600] lg:text-[18px] text-[14px]">{x.name}</h1>
                      </div>
                      <div className="flex items-center">
                        <h1 className="font-[600] lg:text-[16px] text-[14px] text-[#0B568D]">
                          {x.score} poin
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <PopupProfil
                  onClose={() => setPopupLeaderboardStatus(false)}
                  lookup={getPopupLeaderboardStatus}
                  widthModal="!max-w-[748px]"
                  popupRank={5}
                  point={x.score}
                  image={Avatar}
                  name={x.name}
                  major={"Blokchain"}
                  semester={"5"}
                />
              </>
            )
          );
        })}
    </div>
  );
};

export default RankingSection;
