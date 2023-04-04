import { FC, ReactElement } from "react";

const FaqSkeleton: FC = (): ReactElement => {
  return (
    <div className="flex flex-col items-center bg-neutral-200  w-full animate-pulse py-10">
      <div className=" pt-8 flex flex-col items-center mb-5">
        <div className="bg-neutral-300  text-center dark:text-white mb-[36px] h-[34px] rounded-[8px] w-[300px]"></div>
      </div>

      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className=" flex lg:w-[1000px] md:w-[800px] w-full px-10 flex-wrap items-center justify-center mb-[20px] gap-6 "
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className=" lg:col-span-4 w-full md:w-[271px] px-[10px] h-[44px] bg-neutral-300 rounded-[8px] flex items-center justify-center"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FaqSkeleton;
