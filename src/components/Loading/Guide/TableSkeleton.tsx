import { FC, ReactElement } from "react";

const TableSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-[76px] mb-[64px] md:px-20 px-10 animate-pulse">
      <div className="grid lg:grid-cols-12 gap-[20px]">
        {[...Array(3)].map((_, index) => {
          return (
            <div
              key={index}
              className="col-span-4 bg-neutral-200 shadow-md w-full h-full rounded-[8px] pr-7"
            >
              <div className="animate-pulse p-5">
                <div className="h-[100px] w-[100px] rounded-[8px] bg-neutral-300 mb-3" />
                <div className="font-[700] h-[27px] bg-neutral-300 rounded-md" />
                <div className="font-[700] h-[27px] bg-neutral-300 rounded-md mt-3" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableSkeleton;
