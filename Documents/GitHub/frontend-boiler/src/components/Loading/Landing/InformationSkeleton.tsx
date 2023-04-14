import { FC, ReactElement } from "react";

const InformationSkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse py-10 lg:px-20 px-8">
      <div className="flex justify-center">
        <h1 className="bg-neutral-200 lg:w-96 md:w-64 w-44 lg:py-8 md:py-6 py-4 mb-10 rounded-lg"></h1>
      </div>
      <div className="grid w-auto lg:grid-cols-3 md:grid-cols-1 lg:gap-x-10 md:gap-x-5 md:gap-y-5 gap-y-5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-neutral-200 w-full py-7 rounded-lg px-7">
            <div className="bg-neutral-300 w-full lg:py-24 md:py-44 sm:py-40 py-24 rounded-lg"></div>
            <div className="bg-neutral-300 w-6/12 py-4 rounded-lg mt-4"></div>
            <div className="bg-neutral-300 w-full py-5 rounded-lg mt-4"></div>
            <div className="bg-neutral-300 w-full py-14 rounded-lg mt-4"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InformationSkeleton;
