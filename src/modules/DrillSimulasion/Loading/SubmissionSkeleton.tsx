import { FC, ReactElement } from "react";

const SubmissionSkeleton: FC = (): ReactElement => {
  return (
    <>
      <section className="lg:px-0 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md mb-3 min-h-screen">
        <div className="flex flex-row lg:gap-12 gap-6 md:ml-10 ml-0 ">
          <div className="animate-pulse bg-neutral-200 lg:w-56 w-44 py-4 rounded-lg "></div>
          <div className="animate-pulse bg-neutral-200 lg:w-48 w-32 py-4 rounded-lg "></div>
        </div>
        <div className="animate-pulse bg-neutral-100 py-1 md:w-11/12 w-full rounded-lg mt-4 flex md:ml-10 ml-0"></div>
        <div className="flex lg:flex-row flex-col flex-wrap md:justify-start justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col mb-0 lg:justify-start md:justify-around justify-center md:gap-10 lg:gap-20 gap-5 mt-10 md:ml-10 ml-0  animate-pulse bg-neutral-100 lg:w-[29%] md:w-[50%] rounded-lg "
            >
              <div className="mb-10 w-full">
                <div className="animate-pulse bg-neutral-300 w-12/12 py-24 rounded-lg  relative z-10 ">
                  <div
                    className="animate-pulse bg-neutral-100 w-20 py-3 rounded-lg px-3 absolute z-20 top-8 right-6 justify-end
                "
                  ></div>
                </div>
                <div className="px-5">
                  <div className="flex gap-4 mt-5 ">
                    <div className="animate-pulse bg-neutral-300 py-3 w-36 rounded-lg"></div>
                    <div className="animate-pulse bg-neutral-300 py-3 w-24 rounded-lg"></div>
                  </div>
                  <div className="animate-pulse bg-neutral-300 py-3 w-56 rounded-lg mt-5 "></div>
                  <div className="flex mt-8 justify-end ">
                    <div className="animate-pulse bg-neutral-300 w-[40%] py-4 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SubmissionSkeleton;
