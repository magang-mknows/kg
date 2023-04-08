import { FC, ReactElement } from "react";

const ChooseStudySkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse w-full my-20 lg:px-28 px-8">
      <div className="flex sm:justify-start justify-center ">
        <h1 className=" bg-neutral-200 lg:h-16 md:h-14 h-10 md:w-7/12 w-full rounded-lg "></h1>
      </div>
      <div className="flex md:flex-row flex-col lg:flex-nowrap flex-wrap mt-10 w-full gap-4  ">
        {[...Array(3)].map((_, i) => (
          <div className="bg-neutral-200 lg:w-4/12 w-full py-5 rounded-lg px-3">
            <div className="bg-neutral-300 w-full lg:py-36 md:py-44 py-24"></div>
            <div className="flex flex-row mt-4 gap-3">
              <div className="bg-neutral-300 w-2/12 py-3 rounded-lg"></div>
              <div className="bg-neutral-300 w-4/12 py-3 rounded-lg"></div>
            </div>
            <div className="bg-neutral-300 w-full py-4 mt-3 rounded-lg"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center mt-[40px]">
        <button className="bg-neutral-200 rounded-lg font-semibold animate-bounce w-80 px-4 h-[40px] lg:w-[250px] lg:h-[56px] sm:w-full sm:h-[40px]"></button>
      </div>
    </section>
  );
};

export default ChooseStudySkeleton;
