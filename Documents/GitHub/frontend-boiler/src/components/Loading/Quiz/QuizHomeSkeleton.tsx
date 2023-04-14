import { FC, ReactElement, Fragment } from "react";
import BreadCrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";

const QuizHomeSkeleton: FC = (): ReactElement => {
  return (
    <div className="w-full">
      <BreadCrumbSkeleton />
      <section className="animate-pulse flex flex-col gap-y-10 w-[85%] mx-auto my-16">
        <div className="flex flex-col gap-4 w-[30%] items-center mx-auto">
          <div className="animate-pulse rounded-lg w-full h-10 bg-gray-200" />
          <div className="animate-pulse rounded-lg w-[150px] h-10 bg-gray-200" />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-8">
          <section className="animate-pulse flex flex-col w-full gap-y-[30px] mb-4 items-center">
            <div className="animate-pulse rounded-lg w-[85%] md:w-full h-[550px] bg-gray-200" />
          </section>
          <section className="flex flex-col gap-4 p-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-lg w-auto h-5 bg-gray-200" />
            ))}
            <div className="animate-pulse rounded-lg w-[45%] h-14 bg-gray-200 mt-6"></div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default QuizHomeSkeleton;
