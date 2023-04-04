import { FC, ReactElement } from "react";

const HeroSkeleton: FC = (): ReactElement => {
  return (
    <div className="w-full px-6 md:px-8 lg:px10">
      <div className="mt-[56px] flex justify-center">
        <h1 className="animate-pulse bg-neutral-200 w-72 py-4 rounded-lg text-center"></h1>
      </div>
      <div className="animate-pulse bg-neutral-200 mt-[36px] w-full h-[135px] container mx-auto rounded-[8px] lg:mb-[30px] mb-[60px]">
        <div className="container px-[36px] lg:pt-[28px] lg:py-[16px] md:py-[10px] py-[30px]">
          <h1 className="animate-pulse bg-neutral-300 rounded-lg py-3 w-36 "></h1>
          <h1 className="animate-pulse bg-neutral-300 rounded-lg py-4 w-11/12 mt-[10px]"></h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
