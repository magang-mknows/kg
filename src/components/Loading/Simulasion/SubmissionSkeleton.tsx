import { FC, ReactElement } from "react";

const SubmissionSkeleton: FC = (): ReactElement => {
  return (
    <section className="lg:px-0 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md mb-3 min-h-screen">
      <div className="flex flex-row gap-12 ml-10 ">
        <div className="animate-pulse bg-neutral-200 w-56 py-4 rounded-lg "></div>
        <div className="animate-pulse bg-neutral-200 w-48 py-4 rounded-lg "></div>
      </div>
      <div className="animate-pulse bg-neutral-100 py-1 w-11/12 rounded-lg mt-4 flex ml-10"></div>

      <div className="flex flex-col mb-20 lg:justify-start md:justify-around justify-center md:gap-10 lg:gap-20 gap-5 mt-10 ml-10 animate-pulse bg-neutral-100 w-[381px] rounded-lg ">
        <div className="mb-10 px-5 w-full">
          <div className="animate-pulse bg-neutral-300 w-[381px] py-24 rounded-lg -ml-5 relative z-10">
            <div
              className="animate-pulse bg-neutral-100 w-20 py-3 rounded-lg px-3 absolute z-20 top-8 right-6 justify-end
                "
            ></div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="animate-pulse bg-neutral-300 py-3 w-36 rounded-lg"></div>
            <div className="animate-pulse bg-neutral-300 py-3 w-24 rounded-lg"></div>
          </div>
          <div className="animate-pulse bg-neutral-300 py-3 w-56 rounded-lg mt-5"></div>
          <div className="flex mt-8 justify-end">
            <div className="animate-pulse bg-neutral-300 w-[182px] h-[35px] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionSkeleton;
