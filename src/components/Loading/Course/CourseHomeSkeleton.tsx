import { FC, ReactElement } from "react";

const CourseHomeSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <section className="animate-pulse flex flex-col gap-y-10 w-[85%] mx-auto my-8">
        <section className="animate-pulse flex flex-col w-full gap-y-[30px] mb-4 items-center">
          <div className="animate-pulse rounded-lg p-3 w-[30%] h-10 bg-gray-200" />
          <div className="animate-pulse rounded-lg p-3 w-[95%] h-[250px] bg-gray-200" />
          <div className="w-full flex flex-col justify-evenly gap-2">
            <div className="animate-pulse rounded-lg p-2 w-full bg-gray-200" />
            <div className="animate-pulse rounded-lg p-2 w-full bg-gray-200" />
            <div className="animate-pulse rounded-lg p-2 w-full bg-gray-200" />
            <div className="animate-pulse rounded-lg p-2 w-full bg-gray-200" />
          </div>
        </section>
        <section className="flex flex-col gap-[30px]">
          <div className="animate-pulse rounded-lg w-auto h-14 bg-gray-200" />
          <div className="animate-pulse rounded-lg w-auto h-14 bg-gray-200" />
          <div className="animate-pulse rounded-lg w-auto h-14 bg-gray-200" />
          <div className="animate-pulse rounded-lg w-auto h-14 bg-gray-200" />
        </section>
      </section>
    </div>
  );
};

export default CourseHomeSkeleton;
