import React, { FC, ReactElement } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import dummyImg from "@/assets/dashboard/dummyCourse.png";
import GlobalButton from "@/components/Common/GlobalButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const ProgressSection: FC = (): ReactElement => {
  const percent = Math.floor(14/14*100);
  return (
    <section
      className={`${montserrat.className} mx-4 my-4 bg-[#ffffff] w-full pt-[28px] px-[24px]`}
    >
      <p className="font-semibold text-xl text-[#171717]">Lanjutkan Mata Kuliah Kamu</p>
      <p className="text-sm font-normal text-[#171717]">Semester 1</p>
      <div className="wrapper mt-5 grid gap-y-[20px]">
        <div className="progressBox w-full relative grid grid-flow-col gap-x-4 gap-y-[20px] rounded-lg px-5 py-5 border-[#F5F5F5] border-[1px] border-solid">
          <Image className="rounded-lg w-[100px] h-[100px] object-cover" src={dummyImg} alt="tes" />
          <div className="flex justify-between w-full">
            <div>
              <p className="mb-[12px]">Introduction to Japanese Culture</p>
              <p className="text-[#737373] text-[12px] font-normal mb-[17px] mt-0">
                Semester 1 | Japanese Culture
              </p>
              <div className="bg-[#D9D9D9] w-[200px] rounded-lg h-[10px] inline-block relative bottom-2 mt-0 mr-[12px]">
                <div className={`bg-[#106FA4] w-[${percent}%] rounded-lg h-[10px] text-[0px]`}>.</div>
              </div>{" "}
              <p className="text-[14px] text-[#737373] font-normal inline mt-0 leading-none">
                5/14 <span className="text-[12px]">Pertemuan</span>
              </p>
            </div>
            {percent!=100? <GlobalButton
              className="my-auto text-center"
              text="Lanjut Belajar"
              size="base"
              hasImg={false}
              textStyle="mx-auto"
            /> : <GlobalButton className="my-auto bg-[#D4D4D4]" text="Complete" size="base" hasImg={false} textStyle="mx-auto"/>}
            
            
          </div>
        </div>
        {/* --------------------batas----------------------- */}
        <div className="progressBox w-full relative grid grid-flow-col gap-x-4 rounded-lg px-5 py-5 border-[#F5F5F5] border-[1px] border-solid">
          <Image className="rounded-lg w-[100px] h-[100px] object-cover" src={dummyImg} alt="tes" />
          <div className="flex justify-between w-full">
            <div>
              <p className="mb-[12px]">Introduction to Japanese Culture</p>
              <p className="text-[#737373] text-[12px] font-normal mb-[17px] mt-0">
                Semester 1 | Japanese Culture
              </p>
              <div className="bg-[#D9D9D9] w-[200px] rounded-lg h-[10px] inline-block relative bottom-2 mt-0 mr-[12px]">
                <div className="bg-[#106FA4] w-[75%] rounded-lg h-[10px] text-[0px]">.</div>
              </div>{" "}
              <p className="text-[14px] text-[#737373] font-normal inline mt-0 leading-none">
                5/14 <span className="text-[12px]">Pertemuan</span>
              </p>
            </div>
            <GlobalButton
              className="my-auto text-center"
              text="Lanjut Belajar"
              size="base"
              hasImg={false}
              textStyle="mx-auto"
            />
            {/* <GlobalButton className="my-auto bg-[#D4D4D4]" text="Complete" size="base" hasImg={false} textStyle="mx-auto"/> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
