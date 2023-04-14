import { FC, ReactElement } from "react";

const LoginSkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse lg:w-[720px] sm:w-[620px] lg:h-[600px] sm:h-[400px] flex flex-col justify-center p-8">
      <section className="animate-pulse flex flex-col w-full gap-y-2 mb-4 items-center">
        <div className="animate-pulse h-[50px] bg-gray-200 w-[200px] rounded-lg" />
        <div className="animate-pulse text-center text-sm md:text-base h-[20px] bg-gray-200" />
      </section>
      <div className="animate-pulse rounded-lg p-3 w-auto h-auto bg-gray-200" />
      <div className="animate-pulse rounded-lg p-3 w-auto h-auto bg-gray-200" />
      <div className="animate-pulse rounded-lg p-3 w-auto h-auto bg-gray-200" />
      <div className="animate-pulse rounded-lg p-4 w-auto h-auto bg-gray-200" />
      <div className="animate-pulse rounded-lg p-4 w-auto h-auto bg-gray-200" />
    </section>
  );
};

export default LoginSkeleton;
