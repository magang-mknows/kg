import { FC, ReactElement } from "react";

const HeroSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse lg:grid lg:grid-cols-2 px-6 md:px-8 lg:px10 mt-[30px] mb-[50px]s">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className="animate-pulse bg-neutral-200 w-96 py-8 rounded-lg"></h1>
          <p className="animate-pulse bg-neutral-200 w-11/12 py-12 rounded-lg mt-5"></p>
        </div>
        <div className="animate-pulse bg-neutral-200 rounded-lg seacrh lg:w-[700px] h-[56px]  mt-[48px] flex items-center gap-4  ">
          <input disabled className="" />
        </div>
      </div>
      <div className="col-span-1 grid place-content-end lg:-mt-10">
        <div className="animate-pulse bg-neutral-200 md:w-[440px] lg:h-[300px] w-0 h-0 rounded-md" />
      </div>
    </div>
  );
};

export default HeroSkeleton;
