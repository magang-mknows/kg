import { FC, ReactElement } from "react";

const RegisterSkeleton: FC = (): ReactElement => {
  return (
    <section className="w-full  flex items-center lg:py-10 lg:px-14 md:p-8 sm:p-6 p-4 h-full">
      <section className="flex items-center bg-neutral-100 w-full h-auto rounded-lg shadow-lg">
        <div className="hidden lg:flex flex-col justify-center items-center w-full h-auto p-6">
          <div className="animate-pulse rounded-lg py-24 bg-neutral-200 mb-3 w-[50%]"></div>
          <section className="flex flex-col gap-5">
            <div className="animate-pulse rounded-lg p-4 w-96 h-auto bg-neutral-200"></div>
            <div className="animate-pulse rounded-lg p-14 w-full h-auto bg-neutral-200"></div>
          </section>
          <div className="mt-6 flex flex-row gap-5">
            <div className="animate-pulse p-2 rounded-full bg-neutral-200"></div>
            <div className="animate-pulse p-2 rounded-full bg-neutral-200"></div>
            <div className="animate-pulse p-2 rounded-full bg-neutral-200"></div>
          </div>
        </div>

        <section className="animate-pulse flex flex-col gap-y-6 h-auto w-full mt-6 px-6 py-6">
          <div className="animate-pulse rounded-lg p-6 w-[25%] h-auto bg-neutral-200" />
          <div className="animate-pulse rounded-lg p-3 w-[75%] h-auto bg-neutral-200" />

          <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-200" />
          <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-200" />
          <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-200" />
          <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-200" />
          <div className="flex flex-col gap-y-8 my-6">
            <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-200" />
            <div className="animate-pulse rounded-lg p-3 w-full h-auto bg-neutral-200" />
            <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-200" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default RegisterSkeleton;
