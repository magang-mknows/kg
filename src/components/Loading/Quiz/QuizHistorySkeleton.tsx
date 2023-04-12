import { FC, ReactElement } from "react";
import useWindowSize from "@/hooks/Common/useWindowSize";
import BreadCrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";

const QuizHistorySkeleton: FC = (): ReactElement => {
  const windowSize = useWindowSize();

  return (
    <div className="w-full">
      <BreadCrumbSkeleton />
      <div className="px-6 md:px-8 lg:px-10 w-full h-fit my-20">
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {[...Array(3)].map((_, i) => (
            <section key={i} className="animate-pulse rounded-md bg-gray-500 px-5 py-4 w-full">
              <section className="flex justify-between text-xs">
                <div className="flex flex-col md:flex-row gap-1">
                  {(windowSize.width as number) < 768 ? (
                    <>
                      <div className="animate-pulse rounded-md bg-gray-200 w-[75px] h-4" />
                      <div className="animate-pulse rounded-md bg-gray-200 w-[75px] h-4" />
                    </>
                  ) : (
                    <div className="animate-pulse rounded-md bg-gray-200 w-[142px] h-4" />
                  )}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="animate-pulse rounded-md bg-gray-200 w-[96px] h-4" />
                  <div className="animate-pulse rounded-md bg-gray-200 w-1/2 h-4" />
                </div>
              </section>
              <section className="lg:flex lg:gap-x-2 lg:items-stretch my-6">
                <div className="animate-pulse rounded-lg bg-gray-200 lg:w-28 h-[164px] mb-2 lg:mb-0" />
                <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2">
                  <div className="animate-pulse rounded-lg bg-gray-200 w-full md:w-[210px] h-20" />
                  <div className="animate-pulse rounded-lg bg-gray-200 w-full md:w-[210px] h-20" />
                  <div className="animate-pulse rounded-lg bg-gray-200 w-full md:w-[210px] h-20" />
                  <div className="animate-pulse rounded-lg bg-gray-200 w-full md:w-[210px] h-20" />
                </div>
              </section>
            </section>
          ))}
        </section>
      </div>
    </div>
  );
};

export default QuizHistorySkeleton;
