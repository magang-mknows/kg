import { FC, ReactElement } from "react";

const ProfilSkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse flex flex-col h-auto w-full lg:py-[92px] md:py-[70px] py-[50px] lg:px-[90px] md:px-[70px] px-[50px] bg-[#f8f4f4]">
      <div className="flex flex-col lg:flex-row w-full mb-[30px]">
        <div className="animate-pulse lg:w-[600px] lg:h-[84px] space-y-2 justify-center  bg-white rounded-lg my-2 lg:my-0" />
        <div className="animate-pulse w-full flex flex-col bg-white dark:bg-gray-900 rounded-lg mx-0 lg:mx-9 py-9">
          <div className="relative w-[100px] h-[100px] bg-[#f8f4f4] rounded-full mx-auto mb-9" />
          <div className="animate-pulse h-[20px] mb-[12px] lg:w-[200px] w-full p-0 bg-[#f8f4f4] mx-auto" />
          <div className="animate-pulse h-[16px] mb-[12px] lg:w-[150px] w-full p-0 bg-[#f8f4f4] mx-auto" />
          <div className="grid grid-cols-2 gap-x-8 bg-white px-8 mt-[44px]">
            <div className="animate-pulse h-[16px] mb-[12px] w-full p-0 bg-[#f8f4f4]" />
            <div className="animate-pulse h-[16px] mb-[12px] w-full p-0 bg-[#f8f4f4]" />
            <div className="animate-pulse h-[32px] mb-[12px] w-full p-0 bg-[#f8f4f4]" />
            <div className="animate-pulse h-[32px] mb-[12px] w-full p-0 bg-[#f8f4f4]" />
            <div className="animate-pulse h-[16px] mb-[12px] w-full p-0 bg-[#f8f4f4]" />
            <div className="animate-pulse h-[16px] mb-[12px] w-full p-0 bg-[#f8f4f4]" />
            <div className="animate-pulse h-[32px] mb-[12px] w-full p-0 bg-[#f8f4f4]" />
            <div className="animate-pulse h-[32px] mb-[12px] w-full p-0 bg-[#f8f4f4]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilSkeleton;
