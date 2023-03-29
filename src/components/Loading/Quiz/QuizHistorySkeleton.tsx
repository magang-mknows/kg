import { FC, ReactElement } from "react";

const QuizHistorySkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse flex flex-col gap-y-10 w-[85%] mx-auto my-8">
      <section className="animate-pulse flex flex-col w-full gap-y-[30px] mb-4 items-center">
        <div className="animate-pulse rounded-lg p-3 w-[30%] h-10 bg-gray-200" />
      </section>
      <section className="flex flex-col gap-[30px]"></section>
    </section>
  );
};

export default QuizHistorySkeleton;
