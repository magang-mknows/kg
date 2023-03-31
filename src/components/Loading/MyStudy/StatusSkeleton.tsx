import { FC, ReactElement } from "react";

const StatusSkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse flex flex-col h-auto w-full lg:py-[92px] md:py-[70px] py-[50px] lg:px-[109px] md:px-[70px] px-[50px]">
      <div className="animate-pulse lg:w-[350px] w-full h-[18px] mb-[12px] p-0 bg-neutral-200" />
      <div className="animate-pulse lg:w-[350px] w-full h-[14px] mb-[12px] p-0 bg-neutral-200" />
      <div className="animate-pulse h-[14px] mb-[12px] lg:w-[350px] w-full p-0 bg-neutral-200" />
      <div className="animate-pulse h-[12px] mb-[39px] lg:w-[350px] w-full p-0 bg-neutral-200" />
      <div className="animate-pulse h-[12px] mb-[12px] lg:w-[500px] w-full p-0 bg-neutral-200" />
      <div className="animate-pulse h-[24px] mb-[39px] lg:w-[150px] w-full p-0 bg-neutral-200" />

      <div className="animate-pulse h-[18px] mb-[29px] lg:w-[150px] w-full p-0 bg-neutral-200" />
      <div className="animate-pulse h-[354px] w-full m-0 bg-neutral-200 mb-[30px]" />
      <div className="animate-pulse h-[200px] w-full m-0 bg-neutral-200" />
      <div className="animate-pulse h-[12px] my-[28px] lg:w-[550px] w-full p-0 bg-neutral-200" />
      <div className="flex justify-center"></div>
      
      
    </section>
  );
};

export default StatusSkeleton;