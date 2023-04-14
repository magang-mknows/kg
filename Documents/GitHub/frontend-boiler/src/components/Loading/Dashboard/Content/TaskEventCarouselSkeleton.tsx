import { FC, ReactElement } from "react";

const TaskEventCarouselSkeleton: FC = (): ReactElement => {
  return (
    <div className="bg-gray-500 p-7 rounded-md shadow-sm w-full overflow-hidden">
      <div className="w-full flex flex-col gap-y-4">
        <div className="w-full flex justify-between">
          <div className="w-full flex flex-col gap-2">
            <span className="bg-gray-200 rounded-md h-6 w-1/4" />
            <span className="bg-gray-200 rounded-md h-4 w-1/3" />
          </div>
          <div className="flex gap-1">
            <span className="bg-gray-200 rounded-full h-2 w-2" />
            <span className="bg-gray-200 rounded-full h-2 w-6" />
            <span className="bg-gray-200 rounded-full h-2 w-2" />
          </div>
        </div>
        <div className="w-full grid grid-cols-[90px_1fr] gap-4">
          <span className="bg-gray-200 rounded-md h-[110px] w-[90px]" />
          <div className="flex flex-col justify-center gap-3">
            <span className="bg-gray-200 rounded-sm h-5 w-[90%]" />
            <span className="bg-gray-200 rounded-sm h-4 w-[70%]" />
            <span className="bg-gray-200 rounded-sm h-4 w-[80%]" />
          </div>
        </div>
        <div className="w-full flex gap-4 items-center">
          <span className="bg-gray-200 rounded-md h-10 w-full md:w-[40%]" />
          <span className="bg-gray-200 rounded-sm h-5 w-full md:w-[55%]" />
        </div>
      </div>
    </div>
  );
};

export default TaskEventCarouselSkeleton;
