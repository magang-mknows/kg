import { FC, ReactElement } from "react";

const ContentSkeleton: FC = (): ReactElement => {
  return (
    <section className="lg:px-20 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md mb-3 min-h-screen">
      <div className="animate-pulse bg-white h-full">
        <div className="flex flex-row gap-4 ml-10 ">
          <div className="animate-pulse bg-neutral-200 w-44 py-4 rounded-lg "></div>
          <div className="animate-pulse bg-neutral-200 w-32 py-4 rounded-lg "></div>
          <div className="animate-pulse bg-neutral-200 w-32 py- rounded-lg "></div>
          <div className="animate-pulse bg-neutral-200 w-44 py-4 rounded-lg "></div>
          <div className="animate-pulse bg-neutral-200 w-32 py-4 rounded-lg "></div>
        </div>

        <div className="mt-10 px-10">
          <div className="pb-10">
            <div className="animate-pulse bg-neutral-100 flex flex-col md:flex-row  rounded-lg drop-shadow-md relative p-0 justify-between">
              <div className="animate-pulse bg-neutral-100 flex absolute -left-0 rounded-tl-lg rounded-bl-lg h-full w-3" />
              <div className="animate-pulse banner px-8 py-12">
                <h1 className="animate-pulse bg-neutral-300 w-44 rounded-lg py-4"></h1>
                <p className="animate-pulse bg-neutral-300 w-40 rounded-lg py-3 mt-3"></p>
              </div>
              <div className="flex flex-col items-center md:items-center mr-6 md:mr-0 px-8 mb-7 md:py-7">
                <div className="animate-pulse bg-neutral-300 w-[26px] h-[26px] rounded-lg"></div>
                <p className="animate-pulse bg-neutral-300 w-24 rounded-lg py-3 mt-5 "></p>
                <div className="flex flex-row text-[#262626] dark:text-white text-[16px] font-[400]">
                  <p className="animate-pulse bg-neutral-300 w-44 rounded-lg py-3 mt-5"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSkeleton;
