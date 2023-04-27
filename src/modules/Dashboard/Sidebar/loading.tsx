import { FC, Fragment, ReactElement } from "react";
import useWindowSize from "@/hooks/Common/useWindowSize";

export const ResumeSectionSkeleton: FC = (): ReactElement => {
  const { width } = useWindowSize();

  return (
    <div className="w-full rounded-md min-h-[540px] mb-10 overflow-hidden">
      <section className="bg-gray-500 rounded-md relative px-6 pt-12 pb-28">
        <h1 className="mb-2 bg-gray-200 rounded-md w-[45%] h-11" />
        <div className="mb-2 flex flex-col gap-1">
          {(width as number) < 768 ? (
            <span className="bg-gray-200 h-6 w-3/4 rounded-sm" />
          ) : (
            <>
              <span className="bg-gray-200 h-6 w-4/5 rounded-sm" />
              <span className="bg-gray-200 h-6 w-1/3 rounded-sm" />
            </>
          )}
        </div>
        <section className="absolute -bottom-64  grid grid-cols-2 gap-2 lg:gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="Card bg-gray-200 rounded-lg shadow-sm w-[140px] md:w-32 lg:w-40 h-40"
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export const LeaderBoardSkeleton: FC = (): ReactElement => {
  return (
    <section className="w-full bg-gray-500  mb-10 px-8 py-7 rounded-md">
      <section className="flex justify-between items-start mb-4">
        <div className="w-1/2 flex flex-col gap-2">
          <h1 className="bg-gray-200 rounded-md w-[70%] h-7 mb-2" />
          <p className="bg-gray-200 rounded-sm w-5 h-5" />
          <p className="bg-gray-200 rounded-sm w-[50%] h-5" />
        </div>
        <div className="PapanSkorLogo w-20 h-20 bg-gray-200 rounded-full" />
      </section>
      <section className="mb-6 ">
        {[...Array(5)].map((_, index) => {
          return (
            <div
              key={index}
              className="flex cursor-pointer gap-2 items-center border-t-2 border-dashed pt-4 pb-3"
            >
              <div className="Circle rounded-full h-7 w-7 bg-gray-200" />
              <div className="w-[40%]">
                <h1 className="bg-gray-200 rounded-sm w-full h-5 mb-2" />
                <p className="bg-gray-200 rounded-sm w-1/2 h-4" />
              </div>
            </div>
          );
        })}
      </section>
      <div className="Button bg-gray-200 rounded-lg h-9 w-full" />
    </section>
  );
};

export const ArticleSkeleton: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="w-full animate-pulse mb-10">
        <div className="flex flex-row items-center justify-between mb-4">
          <h1 className="bg-gray-200 rounded-md w-[120px] h-7" />
          <p className="bg-gray-200 rounded-sm w-[90px] h-5" />
        </div>
        <div className="flex flex-col justify-center shadow-md dark:shadow-sm  bg-gray-500">
          <div className="Image block w-full h-[265px] rounded-lg bg-gray-400" />
          <div className="w-full px-7 py-4 rounded-lg">
            <h1 className="bg-gray-200 rounded-sm h-5 w-1/2 mb-2" />
            <div className="flex flex-row items-center gap-x-2 font-normal text-[12px] text-[#A3A3A3] dark:text-neutral-200">
              <p className="bg-gray-200 rounded-sm h-4 w-[100px]" />
              <svg
                width="3"
                height="2"
                viewBox="0 0 3 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.5" cy="1" r="1" fill="#A3A3A3" />
              </svg>

              <p className="bg-gray-200 rounded-sm h-4 w-[100px]" />
            </div>
            <div className="flex w-full justify-end">
              <p className="bg-gray-200 rounded-sm h-4 w-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
