import { FC, ReactElement } from "react";
import BreadCrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";

const QuizStartSkeleton: FC = (): ReactElement => {
  return (
    <div className="w-full">
      <BreadCrumbSkeleton />
      <section className="animate-pulse flex flex-col-reverse md:flex-row gap-y-10 w-[85%] mx-auto my-8">
        <section className="flex flex-col py-[44px] mx-auto lg:mx-0 px-0 lg:px-[51px] w-3/4 min-h-[550px] gap-[70px]">
          <div className="animate-pulse rounded-lg bg-gray-200 w-full h-7" />
          <div className="flex flex-col items-center justify-between w-full h-80">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-lg bg-gray-200 w-[70%] h-14" />
            ))}
          </div>
          <div className="w-full flex justify-around items-center gap-x-4 px-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-lg bg-gray-200 w-full max-w-[160px] h-12"
              />
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-[250px] w-full md:w-1/4 h-[220px] flex flex-col px-10">
          <div className="animate-pulse rounded-lg w-2/3 h-4 bg-gray-200 my-6" />
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-lg w-9 h-9 bg-gray-200" />
            ))}
          </div>
          <div className="w-full flex justify-end mt-14">
            <div className="animate-pulse rounded-lg w-2/3 h-4 bg-gray-200" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default QuizStartSkeleton;
