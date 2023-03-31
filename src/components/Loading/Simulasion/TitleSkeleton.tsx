import { FC, ReactElement } from "react";

const TitleSkeleton: FC = (): ReactElement => {
  return (
    <div className=" py-10 ">
      <div className="flex flex-col justify-center items-center ">
        <div className="animate-pulse rounded-lg py-6 w-96 h-auto bg-neutral-200 mb-8"></div>
        <div className="animate-pulse rounded-lg py-3 w-8/12 h-auto bg-neutral-200 "></div>
      </div>
      <div className="lg:px-16 md:px-10 flex flex-col items-center">
        <div className="animate-pulse bg-neutral-200 h-[56px] mt-10 mb-10 rounded-lg w-11/12 ">
          <input disabled />
        </div>
      </div>
    </div>
  );
};

export default TitleSkeleton;
