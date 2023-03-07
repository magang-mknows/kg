import { FC, ReactElement } from "react";
import MainLayout from "@/layouts/Main";
import CarouselMenu from "@/components/PatnerAction";

const MitraSection: FC = (): ReactElement => {
  return (
    <MainLayout withHScreen={false}>
      <div className="flex flex-col p-6  lg:py-20 mb-10 overflow-hidden">
        <div className="flex gap-2 lg:p-8 pb-10 lg:justify-center justify-start items-start lg:items-center ">
          <h1 className="flex gap-2 text-3xl font-bold">
            Mitra <span className="text-[#106FA4] ">Kampus Kami</span>
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <CarouselMenu />
        </div>
      </div>
    </MainLayout>
  );
};

export default MitraSection;
