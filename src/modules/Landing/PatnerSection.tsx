import { FC, ReactElement } from "react";
import CarouselMenu from "@/components/PatnerAction";

const MitraSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="lg:mb-10 mb-2 flex gap-2 lg:justify-center justify-start items-start lg:items-center dark:bg-gray-600">
        <h1 className="flex gap-2  lg:pt-20 pt-10 text-[35px] md:text-[40px] lg:text-5xl font-bold text-[#262626] bg-white justify-center w-full dark:bg-gray-900 dark:text-white">
          Mitra <span className="text-[#106FA4] ">Kampus Kami</span>
        </h1>
      </div>
      <p className="flex w-screen justify-center px-4 font-semibold text-2xl">
        Program MSIB Depdikbud
      </p>
      <div className="flex items-center justify-center pt-[40px]">
        <CarouselMenu />
      </div>
    </div>
  );
};

export default MitraSection;
