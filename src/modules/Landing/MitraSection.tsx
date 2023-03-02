import { FC, ReactElement } from "react";
import CarouselMenu from "@/components/Carousel";

const MitraSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col p-10 pb-20">
      <div className="flex gap-2 p-8 justify-center items-center ">
        <h1 className="text-3xl font-bold">
          Mitra <span className="text-[#106FA4]">Kampus Kami</span>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <CarouselMenu />
      </div>
    </div>
  );
};

export default MitraSection;
