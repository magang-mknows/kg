import Image from "next/image";
import React, { FC, ReactElement } from "react";
import { leaderBoardProps } from "./type";
const RankingSection: FC<leaderBoardProps> = ({ name, img, score, index }): ReactElement => {
  return (
    <div>
      <div className="flex lg:px-[56px] px-3 mt-[15px]">
        <div className="w-full bg-white flex justify-between border-b-[#F5F5F5] border-b-2 px-[20px] rounded-[8px]">
          <div className="flex items-center gap-[30px] p-2">
            <h1 className="font-[400] lg:text-[24px] text-[20px]">{index}</h1>
            <Image
              src={img}
              alt="avatar"
              className="w-[56px] h-[56px] rounded-full overflow-hidden"
            />
            <h1 className="font-[600] lg:text-[18px] text-[14px]">{name}</h1>
          </div>
          <div className="flex items-center">
            <h1 className="font-[600] lg:text-[16px] text-[14px] text-[#0B568D]">{score} poin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingSection;
