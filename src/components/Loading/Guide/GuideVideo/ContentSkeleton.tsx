import { FC, ReactElement } from "react";

const ContentSkeleton: FC = (): ReactElement => {
  return (
    <div className="w-full px-6 mt-44 md:px-8 lg:px-10">
      <div className="mt-[24px] mb-[54px] justify-between grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-8 md:gap-x-8 md:gap-y-5 gap-y-5">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-neutral-200 w-full rounded-lg min-h-min px-3 shadow-md"
          >
            <div className="flex justify-end flex-col gap-5 mt-44">
              <div className="animate-pulse bg-neutral-300 w-64 py-4 rounded-lg"></div>
              <div className="animate-pulse bg-neutral-300 w-full py-6 rounded-lg"></div>
              <p className="w-full text-sm font-base mt-3.5 dark:text-white text-black"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSkeleton;
