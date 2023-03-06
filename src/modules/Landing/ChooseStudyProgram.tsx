import { FC, ReactElement } from "react";
import Card from "@/components/Common/Card";

// asset
import ImgStudyProgram from "@/assets/img-study-program.svg";
import ImgStudyProgram2 from "@/assets/img-study-program2.svg";
import ImgStudyProgram3 from "@/assets/img-study-program3.svg";

const ChooseStudyProgram: FC = (): ReactElement => {
  return (
    <section className="container w-full my-[100px] px-16">
      <h1 className="font-bold text-[44px]">Pilihan Program Studi</h1>
      <div className="flex flex-row justify-between space-x-6` py-[20px]">
        <Card
          className="border rounded-lg px-3 shadow-md"
          hasImage={true}
          src={ImgStudyProgram}
          titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
          title="Pembiayaan dan Optimalisasi Bisnis"
          icon={
            <div className="flex flex-row space-x-1">
              {/* sks */}
              <div className="bg-opacity-[10%] px-2 lg:h-[22px] bg-[#066AC9] my-[10px] rounded-[5px] text-[#066AC9] text-[12px] justify-center">
                12 SKS
              </div>
              {/* total mata kuliah */}
              <div className="lg:h-[22px] text-white px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#3EB449]">
                4 Mata Kuliah
              </div>
            </div>
          }
        ></Card>
        <Card
          className="border rounded-lg px-3 shadow-md"
          hasImage={true}
          src={ImgStudyProgram}
          titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
          title="Pembiayaan dan Optimalisasi Bisnis"
          icon={
            <div className="flex flex-row space-x-1">
              {/* sks */}
              <div className="bg-opacity-[10%] px-2 lg:h-[22px] bg-[#066AC9] my-[10px] rounded-[5px] text-[#066AC9] text-[12px] justify-center">
                12 SKS
              </div>
              {/* total mata kuliah */}
              <div className="lg:h-[22px] text-white px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#3EB449]">
                4 Mata Kuliah
              </div>
            </div>
          }
        ></Card>
        <Card
          className="border rounded-lg px-3 shadow-md"
          hasImage={true}
          src={ImgStudyProgram}
          titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
          title="Pembiayaan dan Optimalisasi Bisnis"
          icon={
            <div className="flex flex-row space-x-1">
              {/* sks */}
              <div className="bg-opacity-[10%] px-2 lg:h-[22px] bg-[#066AC9] my-[10px] rounded-[5px] text-[#066AC9] text-[12px] justify-center">
                12 SKS
              </div>
              {/* total mata kuliah */}
              <div className="lg:h-[22px] text-white px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#3EB449]">
                4 Mata Kuliah
              </div>
            </div>
          }
        ></Card>
      </div>
      <div className="justify-center"></div>
    </section>
  );
};

export default ChooseStudyProgram;
