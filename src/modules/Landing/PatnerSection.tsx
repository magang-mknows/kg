import { FC, ReactElement } from "react";
import CarouselMenu from "@/components/PatnerAction";

const MitraSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col mb-10 overflow-hidden">
      <div className="lg:mt-0 flex gap-2 lg:justify-center justify-start items-start lg:items-center ">
        <p className="flex gap-2 title text-[35px] md:text-[40px] lg:text-5xl font-bold text-[#262626] dark:text-white justify-center w-full">
          Mitra <span className="text-[#106FA4] ">Kampus Kami</span>
        </p>
      </div>
      <div className="flex items-center justify-center pt-[65px]">
        <CarouselMenu />
      </div>
    </div>
  );
};

export default MitraSection;
