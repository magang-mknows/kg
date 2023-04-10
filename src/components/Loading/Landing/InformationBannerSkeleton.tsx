import { FC, ReactElement } from "react";

const InformationBannerSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse">
      <div className="flex lg:py-10">
        <section className="grid w-full px-4 py-4 grid-col-1 lg:grid-cols-1 md:grid-cols-1 lg:px-20 md:px-10 place-content-center">
          <div className="flex flex-row lg:grid-cols-3 bg-gray-100 rounded-lg lg:h-[438px]  content-center">
            <div className="flex lg:basis-2/3">
              <div className="flex flex-col lg:leading-[54px] gap-[14px] lg:gap-[28px] p-[32px] lg:px-[64px] place-content-center relative">
                <div className="text-[22px] lg:text-[44px] text-white font-semibold text-center lg:text-start bg-gray-200 w-[701px] h-[162px] rounded" />
                <section className="w-full h-[42px] lg:w-[328px] lg:h-[56px] text-[16px] px-6 py-4 my-6 font-semibold leading-6 bg-gray-200 animate-bounce lg:px-20 rounded" />

                <section className="" />
              </div>
            </div>
            <section className="hidden bg-gray-200 animate-pulse lg:basis-1/3 justify-self-start lg:block" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default InformationBannerSkeleton;
