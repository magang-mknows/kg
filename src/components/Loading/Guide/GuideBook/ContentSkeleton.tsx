import { FC, ReactElement } from "react";

const ContentSkeleton: FC = (): ReactElement => {
  return (
    <div className="w-full px-6 md:px-8 lg:px10">
      <div className="title mt-20">
        <h1 className="animate-pulse bg-neutral-200 w-64 py-3 rounded-lg"></h1>
      </div>
      <div className="mt-[24px] mb-[54px]">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-neutral-200 rounded-lg w-full h-[54px] shadow-md  flex justify-between items-center p-[24px] mt-[16px]"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ContentSkeleton;
