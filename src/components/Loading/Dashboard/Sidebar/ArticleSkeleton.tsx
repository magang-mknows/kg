import { FC, Fragment, ReactElement } from "react";

const ArticleSkeleton: FC = (): ReactElement => {
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

export default ArticleSkeleton;
