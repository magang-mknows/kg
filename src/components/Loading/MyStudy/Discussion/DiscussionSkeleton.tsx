import { FC, ReactElement } from "react";

const DiscussionSkeleton: FC = (): ReactElement => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-10 px-6 md:px-8 lg:px-10 py-10 mt-44">
      <div className="md:basis-3/12  ">
        <div className="animate-pulse bg-neutral-100 md:w-72 w-full py-10 rounded-lg flex flex-row justify-between items-center mb-3">
          <div className="flex flex-col justify-center items-center px-6 gap-4">
            <div className="animate-pulse bg-neutral-200 md:w-56 w-96 xs:w-10 py-5 rounded-lg"></div>
            <div className="animate-pulse bg-neutral-200 md:w-56 w-96 xs:w-10 py-5 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="md:basis-11/12 basis-12/12">
        <div className="animate-pulse bg-neutral-100 w-full rounded-lg md:px-10 px-4 py-8 mb-4">
          <div className="flex flex-row md:gap-5 gap-2 items-center">
            <div className="animate-pulse bg-neutral-200 w-[44px] h-[44px] rounded-full"></div>
            <div className="flex flex-col gap-2">
              <h1 className="animate-pulse bg-neutral-200 md:w-72 w-36 py-3 rounded-lg"></h1>
              <p className="animate-pulse bg-neutral-200 md:w-96 w-44 py-2 rounded-lg"></p>
            </div>
          </div>
          <p className="animate-pulse bg-neutral-200 w-full py-10 rounded-lg mt-8"></p>
          <div className="flex flex-row gap-6">
            <div className="animate-pulse bg-neutral-200 w-16 py-3 rounded-lg mt-5"></div>
            <div className="animate-pulse bg-neutral-200 w-16 py-3 rounded-lg mt-5"></div>
          </div>
          {/* <LikeComment /> */}

          <div className="comment  rounded-[8px] mt-4  flex justify-end h-[44px]">
            <input className="animate-pulse bg-neutral-200 w-full px-3 rounded-lg" disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionSkeleton;
