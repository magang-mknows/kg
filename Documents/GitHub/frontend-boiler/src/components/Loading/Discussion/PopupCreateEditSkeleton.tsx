import { FC, ReactElement } from "react";

const PopupCreateEditSkeleton: FC = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 animate-pulse">
      <h1 className="h-10 bg-gray-200 rounded-md w-52"></h1>
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col gap-2">
          <div className="h-4 bg-gray-200 rounded-md w-36"></div>
          <section className="h-12 bg-gray-200 rounded-md"></section>
          <p className="h-4 bg-gray-200 rounded-md w-36"></p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-4 bg-gray-200 rounded-md w-36"></div>
          <section className="h-48 bg-gray-200 rounded-md"></section>
          <p className="h-4 bg-gray-200 rounded-md w-36"></p>
        </div>
        <div className="flex justify-end">
          <div className="bg-gray-200 w-[111px] h-[40px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default PopupCreateEditSkeleton;
