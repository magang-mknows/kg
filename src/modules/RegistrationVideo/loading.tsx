import { FC, ReactElement } from "react";

const LoadingRegistrationVideo: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      {/* breadcrumb */}
      <div className="px-9 py-5">
        <section className="animate-pulse w-64 py-3 rounded-lg bg-gray-200" />
      </div>
      <div className="w-full px-6 md:px-8 lg:px-10 my-[68px]">
        <div className="flex-row lg:flex gap-[40px] xl:flex-nowrap lg:flex-wrap">
          {/* youtube */}
          <div className="w-full animate-pulse">
            <div className=" bg-neutral-200 rounded-lg xl:w-[728px] lg:w-full xl:h-[398px] lg:h-[508px] w-full h-[320px]"></div>
            <div className=" bg-neutral-200 rounded-lg w-full py-10 mt-10 mb-10"></div>
          </div>
          {/* description */}
          <div className="w-full animate-pulse">
            <div className=" bg-neutral-200 rounded-lg w-72 py-5 md:mt-0 mt-10"></div>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className=" bg-neutral-200 rounded-lg w-full h-fit mt-[28px] p-3 shadow-md"
              >
                <div className="flex flex-row gap-4">
                  <div className="bg-neutral-300 rounded-lg w-56 py-14"></div>
                  <div className="">
                    <h1 className="bg-neutral-300 rounded-lg md:w-64 w-24 py-3 "></h1>
                    <p className="bg-neutral-300 rounded-lg md:w-96 py-7 w-44 md:mt-6 mt-3"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingRegistrationVideo;
