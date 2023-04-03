import { FC, ReactElement } from "react";

const DiscussionSkeleton: FC = (): ReactElement => {
  return (
    <>
      <div className="relative flex flex-col w-full h-full animate-pulse ">
        <div className="flex flex-col justify-start lg:flex-row lg:justify-between animate-pulse ">
          <div className="w-[100%] bg-gray animate pulse">
            <div className="flex justify-center w-full lg:justify-start animate-pulse py-14 "></div>
          </div>
          <div className="object-right w-screen h-full pt-10 bg-gray-100 animate pulse lg:relative animate-pulse lg:ml-44 lg:pt-0">
            <div className="flex flex-col shadow-lg select-none items-center bg-white lg:w-[320px] w-[230px] lg:h-[131px] md:w-[260px] sm:w-[240px] rounded-lg mb-2 z-20 relative bottom-40 lg:right-14 px-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscussionSkeleton;
