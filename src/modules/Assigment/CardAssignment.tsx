import { FC, ReactElement } from "react";
import Image from "next/image";
import AssigmentAssigned from "@/assets/assigned-assigment.svg";

const CardAssignment: FC = (): ReactElement => {
  return (
    <div className="px-12 py-10">
      <div className="flex flex-col md:flex-row bg-[#ffffff] rounded-lg drop-shadow-lg relative p-0 justify-between  ">
        <div className="flex absolute -left-0 rounded-tl-lg rounded-bl-lg bg-[#0B568D] h-full w-3 " />
        <div className="banner px-8 py-9">
          <h1 className="text-[20px] font-[700]">Tugas Pertemuan 1</h1>
          <p className="text-[#A3A3A3] font-[400] text-[16px] mt-3">Perkenalan Budaya Jepang</p>
        </div>
        <div className="flex flex-col md:items-center mr-6 md:mr-0 px-8 mb-7 md:py-7">
          <Image src={AssigmentAssigned} alt={"assigment-ditugaskan"} width={21} className="" />
          <p className="mt-2 text-[16px] text-[#0B568D] font-[600]">DITUGASKAN</p>
          <div className="flex flex-row text-[#262626] text-[16px] font-[400]">
            <p>24-02-2023</p>
            <p className="px-2">|</p>
            <p>12:21:45</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAssignment;
