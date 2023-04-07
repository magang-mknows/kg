import { FC, ReactElement } from "react";

const ContentSkeleton: FC = (): ReactElement => {
  return (
    <div className=" w-full px-6 md:px-8 lg:px10 ">
      <h1 className="animate-pulse bg-neutral-200 rounded-lg lg:grid lg:grid-cols-2 px-6 py-3 w-96"></h1>
      <div className="lg:flex mt-[34px] justify-between mb-5">
        <div>
          <div className="animate-pulse bg-neutral-200 rounded-lg w-96 py-3 step-1"></div>
          <div className="animate-pulse bg-neutral-200 rounded-lg w-72 py-3 step-2 mt-[28px]">
            <div className="animate-pulse bg-neutral-200 rounded-lg w-56 py-4"></div>
          </div>
          <div className="animate-pulse bg-neutral-200 rounded-lg w-96 py-3 step-1 step-3 mt-[28px]"></div>
          <div className="animate-pulse bg-neutral-200 rounded-lg w-72 py-36 mt-5"></div>
        </div>
        <div className="lg:-mt-5">
          <div className="animate-pulse bg-neutral-200 rounded-lg w-96 py-3 step-4 mt-[28px]"></div>
          <div className="animate-pulse bg-neutral-200 rounded-lg w-72 py-7 mt-5"></div>
          <div className="animate-pulse bg-neutral-200 rounded-lg lg:w-[700px] md:w-96 py-3 step-4 step-5 mt-[28px]"></div>
          <div className="animate-pulse bg-neutral-200 rounded-lg w-72 py-20 mt-5"></div>
          <div className="animate-pulse bg-neutral-200 rounded-lg w-96 py-3 step-4 step-5 mt-[28px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentSkeleton;
