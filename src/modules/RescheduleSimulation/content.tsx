import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import rescheduleSimulasi from "@/assets/rescheduleSimulasi/dummyReschedule.svg";
import iconWarning from "@/assets/rescheduleSimulasi/iconWarning.svg";
import calendar from "@/assets/rescheduleSimulasi/calendar.svg";
import afternoon from "@/assets/rescheduleSimulasi/afternoon.svg";
import checklist from "@/assets/rescheduleSimulasi/checklist.svg";
import Accordion from "@/components/Simulasion/Accordion";
import { useRescheduleSimulation } from "@/hooks/Simulation/useRescheduleSimulation";
import { useTimeRescheduleSimulation } from "@/hooks/Simulation/useTimeRescheduleSimulation";

const Content: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState("");
  const { getRescheduleSimulation, setRescheduleSimulation } = useRescheduleSimulation();
  const { getTimeRescheduleSimulation, setTimeRescheduleSimulation } =
    useTimeRescheduleSimulation();

  const tes = [
    {
      date: "Senin, 12 Juli 2021",
    },
    {
      date: "Senin, 19 Juli 2021",
    },
    {
      date: "Senin, 27 Juli 2021",
    },
  ];

  const time = [
    {
      time: "16.30",
    },
    {
      time: "13.30",
    },
    {
      time: "11.30",
    },
  ];
  return (
    <>
      <h1 className="text-[#262626] text-[28px] font-[700] mb-5 dark:text-white mt-5">
        Reschedule Simulasi, Drill & Assessment
      </h1>

      <div className="flex lg:flex-row flex-col lg:gap-16 gap-10 mb-20">
        <div className=" lg:basis-5/12">
          <Image src={rescheduleSimulasi} alt={"reshedule-image"} />
          <div className="flex flex-row mt-3">
            <Image src={iconWarning} alt={"warning"} />
            <p className="ml-2 text-[#171717] text-[18px] font-[600] dark:text-white">
              Informasi Mengenai Drill Simulasi & Assessment
            </p>
          </div>
          <p className="mt-3 text-[#171717] dark:text-white text-[14px] font-[400] text-justify">
            <ol>
              <li>
                1. Peserta harus memastikan bahwa perangkat dan teknologi yang digunakan untuk drill
                simulasi & assessment berfungsi dengan baik. Pastikan bahwa peserta memiliki akses
                yang cukup dan perangkat yang dapat mendukung drill simulasi & assessment pada LMS.
              </li>
              <li>
                2. Sebelum memulai drill simulasi & assessment pada LMS, pastikan bahwa peserta
                telah diberikan instruksi yang jelas dan sasaran yang harus dicapai. Sasaran harus
                sesuai dengan kemampuan dan kebutuhan dari setiap individu yang terlibat dalam drill
                tersebut.
              </li>
            </ol>
          </p>
        </div>
        <div className="lg:basis-7/12">
          <h1 className="text-[#171717] text-[20px] font-[600] dark:text-white">
            Sales dan Penjualan
          </h1>
          <p className="text-[#737373] text-[16px] font-[400] mt-2 mb-1">
            Bambang Sutiyoso, S.Ak, M.Ak
          </p>
          <p className="text-[#737373] text-[16px] font-[400]">Lokasi : Zoom Meeting</p>

          <p className="text-[#171717] text-[14px] font-[600] mt-3 mb-1 dark:text-white">
            Pilih tanggal dan waktu Simulasi
          </p>
          <div className="flex md:flex-row flex-col md:gap-4 gap-0 ">
            {tes.map((items, l) => (
              <button
                className={` px-6 py-3 rounded-[8px] flex flex-row text-center justify-center mt-5 border text-[#737373] w-full ${
                  getRescheduleSimulation === items.date ? "bg-[#3EB449] text-white " : ""
                }`}
                key={l}
                onClick={() => setRescheduleSimulation(items.date)}
              >
                <Image src={calendar} alt={"calendar-date"} />
                <p
                  className={` text-[12px] font-[400] mt-1  ${
                    getRescheduleSimulation === items.date ? "text-white" : ""
                  }} `}
                >
                  {items.date}
                </p>
              </button>
            ))}
          </div>

          <Accordion title="Sore" iconImage={afternoon} idAccordion={isOpen === "" ? "open" : ""}>
            <div className="flex gap-5">
              {time.map((items, i) => (
                <button
                  key={i}
                  className={`flex flex-row text-center  gap-2  py-2 px-3 rounded-[8px] border text-[#525252] ${
                    getTimeRescheduleSimulation === items.time ? "bg-[#3EB449] text-white" : ""
                  } `}
                  onClick={() => setTimeRescheduleSimulation(items.time)}
                >
                  <Image src={checklist} alt={"icon"} className="mt-1" height={10} />
                  <p className="font-[500] text-[12px]">{items.time}</p>
                </button>
              ))}
            </div>
          </Accordion>

          <div className="flex justify-end mt-3">
            <button className="bg-[#FAB317] text-white text-[14px] font-[600] rounded-[8px] h-[45px] w-[289px] justify-center mt-4">
              Ajukan Perubahan Jadwal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
