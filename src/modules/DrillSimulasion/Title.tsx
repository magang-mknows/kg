import { FC, ReactElement } from "react";
import Image from "next/image";
import Search from "@/assets/search.svg";

const Title: FC = (): ReactElement => {
  return (
    <div className="w-full grid place-content-center py-10">
      <h1 className="text-[28px] font-[700] text-center ">Simulasi, Drill & Assessment</h1>
      <p className="text-[16px] font-[600] text-[#A3A3A3] mt-5 flex text-center">
        Simulasi, Drill & Assessment meningkatkan kemampuan individu dan membantu mencari <br />{" "}
        bakat terbaik untuk posisi yang tepat.
      </p>

      {/* Search */}
      <div className="bg-[#F5F5F5] w-full h-[56px] mt-10 mb-10 rounded-[8px]">
        <div className="flex ml-5 py-4">
          <Image src={Search} alt={"search"} width={28} />
          <p className="font-[500] text-[16px] text-[#A3A3A3] ml-4 ">Cari Simulasi</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
