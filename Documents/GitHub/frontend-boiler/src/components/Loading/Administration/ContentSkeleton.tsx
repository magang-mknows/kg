import { FC, ReactElement } from "react";

const ContentSkeleton: FC = (): ReactElement => {
  return (
    <>
      <div className="lg:px-20 px-5 w-full mt-5">
        <h1 className="animate-pulse bg-neutral-200 w-64 py-4 rounded-lg mb-7"></h1>
        <div className="animate-pulse bg-neutral-200 w-full items-center rounded-lg flex gap-x-4 px-4 py-6 "></div>
        <div className="animate-pulse bg-neutral-200 w-full items-center rounded-lg flex flex-col mt-[40px] lg:px-[20px] md:px-[60px] px-[20px] py-20">
          <div className="animate-pulse bg-neutral-300 rounded-lg flex items-center justify-center py-6 w-96 mb-8"></div>
          <div className="animate-pulse bg-neutral-300 rounded-lg flex items-center justify-center mt-8 py-8 w-full"></div>
          <div className="animate-pulse bg-neutral-300 rounded-lg flex items-center justify-center mt-8 py-8 w-full"></div>
          <div className="animate-pulse bg-neutral-300 rounded-lg flex items-center justify-center mt-8 py-8 w-full"></div>
        </div>
      </div>
    </>
  );
};

export default ContentSkeleton;
