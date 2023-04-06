import { FC, ReactElement } from "react";
import BreadCrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";

const ModuleHomeSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadCrumbSkeleton />
      <div className="w-full justify-start lg:px-32 p-2 lg:p-10">
        <div className="animate-pulse bg-gray-500 flex auto p-4 flex-col rounded-lg">
          <div className="flex flex-col p-4">
            <div className="animate-pulse rounded-md bg-gray-200 h-6 w-[200px]" />
            <div className="animate-pulse rounded-md bg-gray-200 h-6 w-[900px] my-4" />
            <div className="flex gap-3">
              <div className="animate-pulse bg-gray-200 px-2 py-2 my-[10px] rounded-[5px] h-9 w-[71px]" />
              <div className="animate-pulse bg-gray-200 px-2 py-2 my-[10px] rounded-[5px] h-9 w-[105px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleHomeSkeleton;
