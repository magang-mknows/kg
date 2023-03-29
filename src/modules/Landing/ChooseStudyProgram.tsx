import { FC, ReactElement } from "react";
import Card from "@/components/Common/Card";
import { StaticImageData } from "next/image";

// asset
import ImgStudyProgram from "@/assets/landing/img-study-program.webp";
import ImgStudyProgram2 from "@/assets/landing/img-study-program2.webp";
import ImgStudyProgram3 from "@/assets/landing/img-study-program3.webp";

const DataDummy: {
  id: number;
  sks: number;
  totMataKuliah: number;
  studyProgramme: string;
  img: StaticImageData;
}[] = [
  {
    id: 1,
    sks: 12,
    totMataKuliah: 4,
    studyProgramme: "Pembiayaan dan Optimalisasi Bisnis",
    img: ImgStudyProgram,
  },
  { id: 2, sks: 12, totMataKuliah: 4, studyProgramme: "Design Digital", img: ImgStudyProgram2 },
  {
    id: 3,
    sks: 12,
    totMataKuliah: 4,
    studyProgramme: "Teknologi Ekonomi Digital",
    img: ImgStudyProgram3,
  },
];

const ChooseStudyProgram: FC = (): ReactElement => {
  return (
    <section className="w-full my-20 lg:px-24">
      <h1 className="flex lg:text-start text-center lg:text-[44px] md:text-[44px] text-[30px] font-bold text-[#262626] dark:text-white px-6">
        3 Pilihan Program Studi
      </h1>
      <div
        data-aos="slide-right"
        data-aos-delay="100"
        className="grid lg:grid-cols-3 grid-cols-1 px-6 lg:gap-x-5 gap-y-5 justify-center lg:justify-between py-[20px]"
      >
        {DataDummy.map((dummy, i) => (
          <Card
            key={i}
            className="border rounded-lg px-3 shadow-md"
            hasImage={true}
            src={dummy.img}
            titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
            icon={
              <div className="flex flex-row space-x-1">
                {/* sks */}
                <div className="bg-opacity-[10%] dark:text-white px-2 lg:h-[20px] bg-[#066AC9] my-[10px] rounded-[5px] text-[#066AC9] text-[12px] justify-center">
                  {dummy.sks} SKS
                </div>
                {/* total mata kuliah */}
                <div className="lg:h-[20px] text-white px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#3EB449]">
                  {dummy.totMataKuliah} Mata Kuliah
                </div>
              </div>
            }
          >
            <div className="text-xl font-bold mt-0 text-[#106FA4] w-full dark:text-white">
              {dummy.studyProgramme}
            </div>
          </Card>
        ))}
      </div>
      <div className="flex flex-row justify-center mt-[40px]">
        <button className="font-semibold lg:animate-none animate-bounce bg-[#3EB449] w-auto px-4 h-[40px] lg:w-[250px] lg:h-[56px] sm:w-full sm:h-[40px] text-white rounded-[8px] text-sm">
          Lihat Semua
        </button>
      </div>
    </section>
  );
};

export default ChooseStudyProgram;
