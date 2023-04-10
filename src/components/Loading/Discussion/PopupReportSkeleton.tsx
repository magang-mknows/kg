import { FC, ReactElement } from "react";

const PopupReportSkeleton: FC = (): ReactElement => {
  return (
    <div className="flex flex-col justify-center w-full gap-4 text-center bg-white rounded-lg animate-pulse">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-md justify-self-center"></div>
        <h1 className="w-48 bg-gray-200 rounded-md h-9 "></h1>
      </div>
      <section className="flex flex-col gap-4">
        <div className="w-full h-40 bg-gray-200 rounded-md"></div>
      </section>
      <div className="flex lg:justify-end">
        <div className="w-full bg-gray-200 h-[40px] rounded-md"></div>
      </div>
    </div>
  );
};

export default PopupReportSkeleton;
