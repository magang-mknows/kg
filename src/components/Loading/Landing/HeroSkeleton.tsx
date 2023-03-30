import { FC, ReactElement } from "react";

const HeroSkeleton: FC = (): ReactElement => {
  return (
    <>
      <div className="flex relative flex-col h-full w-full animate-pulse ">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between animate-pulse ">
          <div className="w-[100%] bg-gray animate pulse">
            <div className="flex w-full lg:justify-start justify-center animate-pulse py-14 "></div>
          </div>
          <div className="h-full animate pulse w-screen lg:relative object-right bg-gray-100 animate-pulse lg:ml-44 lg:pt-0 pt-10">
            <div className="flex flex-col shadow-lg select-none items-center bg-white lg:w-[320px] w-[230px] lg:h-[131px] md:w-[260px] sm:w-[240px] rounded-lg mb-2 z-20 relative bottom-40 lg:right-14 px-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSkeleton;
