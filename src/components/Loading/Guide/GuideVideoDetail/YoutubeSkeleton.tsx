import { FC, ReactElement } from "react";

const YoutubeSkeleton: FC = (): ReactElement => {
  return (
    <div className="w-full animate-pulse">
      <div className=" bg-neutral-200 rounded-lg xl:w-[728px] lg:w-full  xl:h-[398px] lg:h-[508px] w-full h-[320px]"></div>
    </div>
  );
};

export default YoutubeSkeleton;
