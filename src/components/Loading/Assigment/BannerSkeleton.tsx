import { FC, ReactElement } from "react";

const BannerSkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse lg:px-20 md:px-10 px-5 py-3 w-full ">
      <div className="animate-pulse h-[212px] rounded-[8px] bg-gray-200">
        <div className="flex flex-col justify-center py-10 items-center">
          <h1 className="animate-pulse bg-gray-300 rounded-lg w-64 py-5 mb-10" />
          <p className="animate-pulse bg-gray-300 rounded-lg w-96 py-3" />
        </div>
      </div>
    </section>
  );
};

export default BannerSkeleton;
