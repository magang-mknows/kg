import { FC, ReactElement } from "react";

const HeroSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse lg:grid lg:grid-cols-2 lg:gap-10 lg:mx-10 mt-[30px] px-10 lg:px-0 mb-[50px]">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className="animate-pulse bg-neutral-200 w-72 py-8 rounded-lg"></h1>
          <p className="animate-pulse bg-neutral-200 w-10/12 py-5 rounded-lg mt-5"></p>
        </div>
        <div className="animate-pulse bg-neutral-200 rounded-lg seacrh lg:w-[700px] h-[56px]  mt-[48px] flex items-center gap-4  ">
          <input disabled className="" />
        </div>
      </div>
      <div className="col-span-1 grid place-content-end lg:-mt-10">
        <div className="animate-pulse bg-neutral-200 md:w-[300px] lg:h-[400px] w-0 h-0 rounded-md" />
      </div>
    </div>
  );
};

export default HeroSkeleton;
