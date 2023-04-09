import { FC, ReactElement } from "react";

const PromotionBannerSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse lg:px-20 md:px-10 px-5 w-full">
      <div className=" bg-neutral-200 w-full py-5 rounded-lg">
        <div className="flex flex-row gap-[14px] lg:gap-[28px] p-[32px] lg:px-[64px] place-content-center justify-start">
          <div className=" lg:basis-2/3 w-full">
            <div className="bg-neutral-300 w-full py-8 rounded-lg"></div>
            <div className="bg-neutral-300 w-full py-5 rounded-lg mt-8"></div>
            <div className="bg-neutral-300 w-72 py-6 rounded-lg mx-6 mt-8 mb-8"></div>
            <div className="bg-neutral-300 lg:w-80 w-full rounded-lg animate-bounce px-0 lg:px-20 lg:py-7 py-5 my-4" />
          </div>
          <div className="lg:basis-1/3 md:hidden lg:inline hidden">
            <div className="bg-neutral-300 w-full h-full rounded-lg mx-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBannerSkeleton;
