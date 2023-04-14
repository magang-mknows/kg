import { FC, ReactElement } from "react";

const PopupDeleteSkeleton: FC = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg center md:gap-8 animate-pulse">
      <div className="flex flex-col items-center w-full gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-md justify-self-center"></div>
        <h1 className="w-48 bg-gray-200 rounded-md h-9 "></h1>
        <section className="w-full h-8 bg-gray-200 rounded-md"></section>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <div className="md:!w-[192px] h-[36px] bg-gray-200 rounded-md"></div>
        <div className="md:!w-[192px] h-[36px] bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default PopupDeleteSkeleton;
