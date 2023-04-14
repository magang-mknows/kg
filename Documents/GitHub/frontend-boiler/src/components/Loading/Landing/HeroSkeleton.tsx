import Image from "next/image";
import LandingDark from "@/assets/landing/dark.webp";
import { FC, ReactElement } from "react";

const HeroSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse px-14 py-24 grid grid-cols-1 lg:grid-cols-2">
      <div className="">
        <div className="mt-4 flex flex-col gap-4">
          <h1 className="bg-gray-200 rounded-md h-11 w-[90%]" />
          <h1 className="bg-gray-200 rounded-md h-11 w-[70%]" />
          <h3 className="bg-gray-200 rounded-md h-9 w-[90%]" />
        </div>
        <div className="flex flex-col gap-2 my-8">
          <p className="bg-gray-200 rounded-md h-7 w-full" />
          <p className="bg-gray-200 rounded-md h-7 w-[65%]" />
        </div>
        <div className="flex w-full justify-center py-12 ">
          <div className="bg-gray-200 rounded-lg w-auto px-4 h-[40px] lg:w-[250px] lg:h-[56px] sm:w-full sm:h-[40px]" />
        </div>
      </div>
      <div className="h-full w-auto lg:relative object-right lg:ml-44 lg:pt-8 pt-49">
        <Image
          loading="eager"
          width={1000}
          height={1000}
          src={LandingDark}
          alt="Image Landing"
          className="z-40 select-none lg:pt-34 mb-10 pb-10 lg:w-[840px] lg:h-[600px] w-[500px] h-[350px] grayscale"
        />
      </div>
    </div>
  );
};

export default HeroSkeleton;
