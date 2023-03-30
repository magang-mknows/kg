import { FC, ReactElement } from "react";

const QuizScoreSkeleton: FC = (): ReactElement => {
  return (
    <div className="px-6 md:px-8 lg:px-16 xl:px-40 py-14 w-full flex flex-col min-h-screen">
      <section className="w-full py-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 items-center justify-center">
        <div className="w-full h-64 relative flex items-center justify-center">
          <div className="absolute animate-pulse rounded-full bg-gray-200 p-4 w-[300px] h-[300px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 ">
          <div className="animate-pulse rounded-lg bg-gray-200 px-4 w-full md:w-[201.5px] h-20" />
          <div className="animate-pulse rounded-lg bg-gray-200 px-4 w-full md:w-[201.5px] h-20" />
          <div className="animate-pulse rounded-lg bg-gray-200 px-4 w-full md:w-[201.5px] h-20" />
          <div className="animate-pulse rounded-lg bg-gray-200 px-4 w-full md:w-[201.5px] h-20" />
        </div>
      </section>
      <section className=" w-full flex justify-center gap-y-5 lg:justify-end mt-10 flex-wrap lg:flex-nowrap gap-x-5 ">
        <div className="animate-pulse rounded-lg bg-gray-200 h-[44px] w-full md:w-[316px]" />
        <div className="animate-pulse rounded-lg bg-gray-200 h-[44px] w-full md:w-[316px]" />
      </section>
    </div>
  );
};

export default QuizScoreSkeleton;
