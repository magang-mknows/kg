import { FC, ReactElement } from "react";
import BreadCrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";

const MyStudySkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadCrumbSkeleton />
      <div className="flex lg:flex-row flex-col w-screen lg:px-24 px-2 py-8">
        <div className="animate-pulse rounded-md bg-gray-200 w-[344px] lg:w-[240px] h-[344px] lg:h-[200px] p-4 ml-5 lg:ml-0 mb-3" />
        <div className="p-2 px-4 w-full">
          <h1 className="animate-pulse rounded-md bg-gray-200 h-6 w-32" />
          <div className="flex flex-col gap-1 my-4">
            <p className="animate-pulse rounded-md bg-gray-200 h-4 w-full" />
            <p className="animate-pulse rounded-md bg-gray-200 h-4 w-full" />
            <p className="animate-pulse rounded-md bg-gray-200 h-4 w-full" />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-rows-1 sm:grid-rows-1 gap-x-3 rounded-lg py-4 gap-y-4">
            <div className="animate-pulse rounded-md bg-gray-200 w-full lg:w-[220px] h-20 py-2" />
            <div className="animate-pulse rounded-md bg-gray-200 w-full lg:w-[220px] h-20 py-2" />
            <div className="animate-pulse rounded-md bg-gray-200 w-full lg:w-[220px] h-20 py-2" />
            <div className="animate-pulse rounded-md bg-gray-200 w-full lg:w-[220px] h-20 py-2" />
          </div>
        </div>
      </div>
      <div className="px-6">
        <div>
          <div className="flex lg:p-8 justify-center items-center flex-col">
            <h1 className="animate-pulse rounded-md bg-gray-200 h-7 w-[145px]" />
            <div className="animate-pulse rounded-lg bg-gray-200 w-full h-[56px] mt-10 mb-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col">
                <div className="animate-pulse rounded-lg bg-gray-200 w-full h-[220px]" />
                <div className="flex justify-end gap-2 py-2">
                  <div className="animate-pulse rounded-md bg-gray-200 lg:h-[22px] px-2 my-[10px] w-14" />
                  <div className="animate-pulse rounded-md bg-gray-200 lg:h-[22px] px-2 my-[10px] text-[12px] justify-center w-[120px]"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="animate-pulse rounded-md bg-gray-200 h-4 w-12" />
                  <div className="animate-pulse rounded-md bg-gray-200 h-4 w-24" />
                  <div className="animate-pulse rounded-md bg-gray-200 h-4 w-[200px]" />
                </div>
                <p className="animate-pulse rounded-md bg-gray-200 w-[90%] h-3 mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStudySkeleton;
