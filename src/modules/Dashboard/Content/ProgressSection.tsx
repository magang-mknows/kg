import React, { FC, ReactElement } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import dummyImg from "@/assets/dashboard/dummyCourse.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const ProgressSection: FC = (): ReactElement => {
  return (
    <section className={`${montserrat.className} mx-4 my-4`}>
      <p className="font-semibold text-xl text-[#171717]">Lanjutkan Mata Kuliah Kamu</p>
      <p className="text-sm font-normal text-[#171717]">Semester 1</p>
      <div className="wrapper mt-5">
        <div className="progressBox">
          <Image className="rounded-lg w-[100px] h-[100px] object-cover" src={dummyImg} alt="tes" />
          <p>Introduction to Japanese Culture</p>
          <p className="text-[#737373]">Semester 1 | Japanese Culture</p>
          <div className="bg-[#D9D9D9] w-[200px] rounded-lg h-[10px]">
            <div className="bg-[#106FA4] w-[75%] rounded-lg h-[10px] text-[0px]">.</div>
          </div>{" "}
          <p>5/14 Pertemuan</p>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
