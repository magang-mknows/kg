import { FC, ReactElement } from "react";
import Image from "next/image";
import RedSekilasInfo from "@/assets/landing/redInfo.svg";

const SekilasSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse flex flex-col lg:px-20 px-0 py-24 lg:py-28 lg:flex-row w-screen h-auto">
      <div data-aos="flip-left" data-aos-delay="300" className="flex flex-col lg:w-[100%] w-screen">
        <h1 className="bg-gray-200 rounded-md h-11 md:h-14 w-[40%] md:w-[75%] mx-auto my-2" />
        <h1 className="bg-gray-200 rounded-md h-8 w-[45%] md:w-[50%] my-6 mx-auto md:mx-4" />
        <div className="px-10 md:px-4 align-center flex flex-col gap-3">
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-[60%] mx-auto md:mx-0" />
        </div>
        <div className="mt-5 px-10 md:px-4 align-center flex flex-col gap-3">
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-[40%] mx-auto md:mx-0" />
        </div>
        <Image
          src={RedSekilasInfo}
          width={450}
          alt={"picture-sekilas-landing"}
          className="m-20 grayscale"
        />
      </div>
      <div className="w-[100%]">
        <span className="PersonIcon block bg-gray-200 rounded-full w-[380px] h-[380px] ml-20 md:mx-auto my-6 lg:my-0" />
        <div className="px-14 py-8 mt-5 flex flex-col gap-3">
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-[90%] mx-auto md:mx-0" />
          <span className="bg-gray-200 rounded-sm h-5 w-[85%] mx-auto md:mx-0" />
          <span className="bg-gray-200 rounded-sm h-5 w-[95%] mx-auto md:mx-0" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
        </div>
        <div className="mt-5 px-8 md:px-4 flex flex-col gap-3">
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-full" />
          <span className="bg-gray-200 rounded-sm h-5 w-[50%] mx-auto md:mx-0" />
        </div>
      </div>
    </div>
  );
};

export default SekilasSkeleton;
