import { FC, ReactElement, useState } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import dummyImg from "@/assets/dashboard/dummyCourse.png";
import moreIcon from "@/assets/dashboard/LihatSemua.svg";
import GlobalButton from "@/components/Common/GlobalButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const dataDummy: {
  id: number;
  judul: string;
  subjudul: string;
  semester: number;
  totalPertemuan: number;
  pertemuanDone: number;
}[] = [
  {
    id: 1,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 10,
    pertemuanDone: 8,
  },
  {
    id: 2,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 5,
    pertemuanDone: 5,
  },
  {
    id: 3,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 10,
    pertemuanDone: 9,
  },
  {
    id: 4,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 14,
    pertemuanDone: 5,
  },
];

const ProgressSection: FC = (): ReactElement => {
  const [more, setMore] = useState(false);
  let lengthData = 0;
  if (more) {
    lengthData = dataDummy.length;
  } else {
    lengthData = 3;
  }
  const handleMore = (): void => {
    setMore(!more);
    console.log(more);
  };
  return (
    <section
      className={`${montserrat.className} bg-[#ffffff] w-full pt-[28px] px-[24px] pb-[44px] mb-[48px]`}
    >
      <p className="font-semibold text-xl text-[#171717] mb-[8px]">Lanjutkan Mata Kuliah Kamu</p>
      <p className="text-sm font-normal text-[#171717]">Semester 1</p>
      <div className="wrapper mt-5 grid gap-y-[20px] mb-[20px]">
        {dataDummy.slice(0, lengthData).map((dummy) => {
          const percent = Math.floor((dummy.pertemuanDone / dummy.totalPertemuan) * 100).toString();
          const classDiv = `${percent}%`;
          return (
            <div
              key={dummy.id}
              className="progressBox w-full relative grid grid-cols-12 gap-x-4 gap-y-[20px] rounded-lg px-5 py-5 border-[#F5F5F5] border-[1px] border-solid"
            >
              <Image
                className=" col-span-2 rounded-lg w-[100px] h-[100px] object-cover "
                src={dummyImg}
                alt="tes"
              />
              <div className=" col-span-10 flex justify-between w-full">
                <div>
                  <p className="mb-[12px]">{dummy.judul}</p>
                  <p className="text-[#737373] text-[12px] font-normal mb-[17px] mt-0">
                    Semester {dummy.semester} | {dummy.subjudul}
                  </p>
                  <div className="bg-[#D9D9D9] w-[200px] rounded-lg h-[10px] inline-block relative bottom-2 mt-0 mr-[12px]">
                    <div
                      style={{ width: classDiv }}
                      className="bg-[#106FA4]  rounded-lg h-[10px] text-[0px]"
                    >
                      .
                    </div>
                  </div>{" "}
                  <p className="text-[14px] text-[#737373] font-normal inline mt-0 leading-none">
                    {dummy.pertemuanDone}/{dummy.totalPertemuan}{" "}
                    <span className="text-[12px]">Pertemuan</span>
                  </p>
                </div>
                {percent != "100" ? (
                  <GlobalButton
                    className="my-auto text-center"
                    text="Lanjut Belajar"
                    size="base"
                    hasImg={false}
                    textStyle="mx-auto"
                  />
                ) : (
                  <GlobalButton
                    className="my-auto bg-[#D4D4D4]"
                    text="Complete"
                    size="base"
                    hasImg={false}
                    textStyle="mx-auto"
                  />
                )}
              </div>
            </div>
          );
        })}
        <button onClick={handleMore}>
          <p className="text-center text-[12px] text-[#737373] font-normal mb-[16px]">
            {more ? "Lihat Lebih Sedikit" : "Lihat Semua"}
          </p>
          <Image className={`mx-auto ${more && "rotate-180"}`} src={moreIcon} alt="Lihat Semua" />
        </button>
      </div>
    </section>
  );
};

export default ProgressSection;
