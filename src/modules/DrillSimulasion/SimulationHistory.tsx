import { FC, ReactElement } from "react";
import Image from "next/image";
import DummyHistory from "@/assets/dummy-drillHistory.svg";
import Done from "@/assets/assigned-done.svg";

const SimulationHistory: FC = (): ReactElement => {
  const tes = [
    {
      src: DummyHistory,
      title: "Sales dan Penjualan",
      dosen: "Bambang Sutiyoso, S.Ak, M.Ak",
      date: "17 Desember 2021",
      time: "16:30",
      status: "belum-selesai",
    },
    {
      src: DummyHistory,
      title: "Sales dan Penjualan",
      dosen: "Bambang Sutiyoso, S.Ak, M.Ak",
      date: "17 Desember 2021",
      time: "16:30",
      status: "selesai",
    },
  ];
  return (
    <div className="md:px-8 px-4 md:py-0 py-0">
      {tes.map((items, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row bg-[#ffffff] rounded-lg drop-shadow-lg relative p-0 justify-between mb-4 "
        >
          <div
            className={`flex absolute -left-0 rounded-tl-lg rounded-bl-lg h-full w-2 ${
              items.status === "selesai" ? "bg-[#3EB449]" : "bg-[#FAB317]"
            }`}
          />
          <div className="flex lg:flex-row flex-col">
            <Image
              alt="Image"
              src={items.src}
              className="md:w-[217px] object-contain md:ml-10 mx-auto "
            />
            <div className="banner md:px-8  px-5 md:py-9 py-4">
              <h1 className="md:text-[20px] text-[16px] font-[700] text-[#262626]">
                {items.title}
              </h1>
              <p className="text-[#A3A3A3] font-[400] text-[16px] mt-3">{items.dosen}</p>
            </div>
          </div>
          <div className="flex flex-col items-center mr-6 md:mr-0 px-8 mb-7 md:py-7">
            {items.status === "selesai" ? (
              <>
                <Image alt="Image" width={21} src={Done} />
                <p className={`mt-2 text-[16px] font-[600] text-[#3EB449]`}>Selesai</p>
              </>
            ) : (
              <button className="bg-[#FAB317] text-white text-[14px] font-[600] rounded-[8px] px-4 py-2 w-[230px] h-[36px]">
                Ajukan Perubahan Jadwal
              </button>
            )}

            <div className="flex flex-row text-[#262626] text-[16px] font-[400] mt-2">
              <p>{items.date}</p>
              <p className="px-2">|</p>
              <p>{items.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimulationHistory;
