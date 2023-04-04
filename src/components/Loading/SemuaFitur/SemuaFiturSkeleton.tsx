import { FC, ReactElement } from "react";

const SemuaFiturSkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse pt-5 lg:px-[72px] md:px-[72px] px-[50px] bg-white w-full flex flex-col">
      <div className="animate-pulse lg:w-[500px] w-[350px] h-[24px] mb-[12px] mx-auto bg-neutral-200" />
      <div className="animate-pulse lg:w-full w-full h-[14px] p-0 bg-neutral-200" />
      <div className="animate-pulse h-[44px] my-[36px] w-full p-0 bg-neutral-200" />
      <div className="grid grid-cols-12 gap-x-[40px] gap-y-[34px]">
        <div className="animate-pulse h-[188px] bg-neutral-200  lg:col-span-3 md:col-span-4 col-span-6 py-[25px] rounded-lg lg:scale-100 md:scale-100 scale-90" />
        <div className="animate-pulse h-[188px] bg-neutral-200  lg:col-span-3 md:col-span-4 col-span-6 py-[25px] rounded-lg lg:scale-100 md:scale-100 scale-90" />
        <div className="animate-pulse h-[188px] bg-neutral-200  lg:col-span-3 md:col-span-4 col-span-6 py-[25px] rounded-lg lg:scale-100 md:scale-100 scale-90" />
        <div className="animate-pulse h-[188px] bg-neutral-200  lg:col-span-3 md:col-span-4 col-span-6 py-[25px] rounded-lg lg:scale-100 md:scale-100 scale-90 lg:inline md:hidden inline" />
      </div>
    </section>
  );
};

export default SemuaFiturSkeleton;
