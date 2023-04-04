import { FC, ReactElement } from "react";
import TableSkeleton from "./TableSkeleton";

const ContentSkeleton: FC = (): ReactElement => {
  return (
    <div className="lg:px-20 px-10 min-h-[80vh] py-4 mt-8 animate-pulse">
      <div className="flex flex-row gap-12  ">
        <div className="bg-neutral-200 w-36 py-4 rounded-lg "></div>
        <div className="bg-neutral-200 w-36 py-4 rounded-lg "></div>
      </div>
      <div className=" bg-neutral-100 py-1 w-full rounded-lg mt-4 flex "></div>
      <div className="flex md:flex-row flex-col md:mt-10 mt-5 gap-14 ">
        <div className="bg-neutral-200 lg:w-[45%] w-[100%] py-40 rounded-lg"></div>
        <TableSkeleton />
      </div>
      <div className="flex justify-end -mt-10">
        <div className="bg-neutral-200 md:w-96 w-56 md:py-8 py-5 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ContentSkeleton;
