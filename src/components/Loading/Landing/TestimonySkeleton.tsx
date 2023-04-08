import { FC, ReactElement } from "react";

const TestimonySkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse flex lg:flex-row flex-col w-screen h-auto py-16 lg:px-16 bg-neutral-400 ">
      <div className=" basis-2/5">
        <div className="flex flex-col lg:justify-center justify-start lg:pl-20 py-10 w-full px-7">
          <h1 className="bg-neutral-200 w-36 py-4 rounded-lg"></h1>
          <div className="flex flex-col items-center md:items-start gap-y-5">
            <h2 className="bg-neutral-200 w-full lg:w-[80%] lg:py-8 py-6 rounded-lg mt-6 "></h2>
            <p className="bg-neutral-200 w-full lg:w-[90%] lg:py-9 py-8 rounded-lg pb-4"></p>
          </div>
          <button className="bg-neutral-200 w-full lg:w-[30%] rounded-lg animate-bounce px-0 lg:px-28 py-6 my-6 md:mt-8" />
        </div>
      </div>

      <div className="basis-3/5">
        <div className="flex lg:flex-row flex-col gap-5 px-5">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="bg-neutral-200 w-full lg:w-[45%] lg:py-10 py-8 rounded-lg px-7 "
            >
              <div className="bg-neutral-300 w-16 h-16 rounded-full mb-5"></div>
              <div className="bg-neutral-300 w-full lg:py-9 py-8 rounded-lg mb-9"></div>
              <div className="bg-neutral-300 w-36 py-4 rounded-lg mb-4"></div>
              <div className="bg-neutral-300 w-44 py-4 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonySkeleton;
