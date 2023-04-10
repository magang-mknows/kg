import { FC, ReactElement } from "react";

const CardSkeleton: FC = (): ReactElement => {
  return (
    <div>
      <div className="animate-pulse flex flex-col lg:flex-row w-full h-auto justify-center bg-gray-500 h-[306px] md:h-[100px] lg:h-[120px] z-[40] mt-2 items-center">
        <div className="flex flex-row lg:my-4 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] my-2">
            <div className="Image relative ml-5 lg:ml-6 lg:w-[40%] lg:h-[100%] w-[40%] h-[100%] flex items-center justify-center" />
          </div>
          <div className="flex flex-col gap-2 my-4 ml-20">
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
          </div>
        </div>
        <div className="flex flex-row lg:my-4 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] py-2 my-2 ml-4">
            <div className="Image relative ml-4 lg:ml-3 lg:w-[70%] lg:h-[100%] w-[50%] h-[100%] flex items-center justify-center" />
          </div>
          <div className="flex flex-col gap-2 my-3 ml-24">
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-8">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:w-[70px] lg:h-[70px] my-2">
            <div className="Image relative px-4 w-[100%] h-[100%] flex items-center justify-center" />
          </div>
          <div className="flex flex-col gap-2 my-4 ml-20">
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
          </div>
        </div>
        <div className="flex flex-row lg:my-4">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:my-2 mx-4 lg:mt-2">
            <div className="Image relative px-4 w-[100%] h-[100%] flex items-center justify-center" />
          </div>
          <div className="flex flex-col gap-2 lg:my-3 mt-2 ml-24 ">
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-10">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] my-2 mr-4">
            <div className="Image relative px-4 w-[100%] h-[100%] flex items-center justify-center" />
          </div>
          <div className="flex flex-col gap-2 my-3 ml-20">
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
            <div className="bg-gray-400 rounded-sm h-5 w-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
