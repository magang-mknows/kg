import { FC, ReactElement } from "react";
import Image from "next/image";
import rescheduleSimulasi from "@/assets/rescheduleSimulasi/dummyReschedule.svg";
import iconWarning from "@/assets/rescheduleSimulasi/iconWarning.svg";
import calendar from "@/assets/rescheduleSimulasi/calendar.svg";

const content: FC = (): ReactElement => {
  const tes = [
    {
      src: rescheduleSimulasi,
      dosen: "Bambang Sutiyoso, S.Ak, M.Ak",
      location: "Zoom Meeting",
      time: [
        {
          date: "Senin, 12 Juli 2021",
        },
        {
          date: "Senin, 19 Juli 2021",
        },
        {
          date: "Senin, 27 Juli 2021",
        },
      ],
    },
  ];
  return (
    <>
      <h1 className="text-[#262626] text-[28px] font-[700] mb-5 dark:text-white">
        Reschedule Simulasi, Drill & Assessment
      </h1>

      {tes.map((items, i) => (
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-10 mb-20" key={i}>
          <div className=" lg:basis-5/12">
            <Image src={items.src} alt={"reshedule-image"} />
            <div className="flex flex-row mt-3">
              <Image src={iconWarning} alt={"warning"} />
              <p className="ml-2 text-[#171717] text-[18px] font-[600] dark:text-white">
                Informasi Mengenai Drill Simulasi & Assessment
              </p>
            </div>
            <p className="mt-3 text-[#171717] dark:text-white text-[14px] font-[400] text-justify">
              <ol>
                <li>
                  1. Peserta harus memastikan bahwa perangkat dan teknologi yang digunakan untuk
                  drill simulasi & assessment berfungsi dengan baik. Pastikan bahwa peserta memiliki
                  akses yang cukup dan perangkat yang dapat mendukung drill simulasi & assessment
                  pada LMS.
                </li>
                <li>
                  2. Sebelum memulai drill simulasi & assessment pada LMS, pastikan bahwa peserta
                  telah diberikan instruksi yang jelas dan sasaran yang harus dicapai. Sasaran harus
                  sesuai dengan kemampuan dan kebutuhan dari setiap individu yang terlibat dalam
                  drill tersebut.
                </li>
              </ol>
            </p>
          </div>
          <div className="lg:basis-7/12">
            <h1 className="text-[#171717] text-[20px] font-[600] dark:text-white">
              Sales dan Penjualan
            </h1>
            <p className="text-[#737373] text-[16px] font-[400] mt-2 mb-1">{items.dosen}</p>
            <p className="text-[#737373] text-[16px] font-[400]">Lokasi : {items.location}</p>

            <p className="text-[#171717] text-[14px] font-[600] mt-3 mb-1 dark:text-white">
              Pilih tanggal dan waktu Simulasi
            </p>
            <div className="flex md:flex-row flex-col md:gap-4 gap-0">
              {items.time.map((item, l) => (
                <button
                  className="outline outline-[#737373] px-6 py-3 rounded-[1.67px] flex flex-row text-center justify-center mt-5 border"
                  key={l}
                >
                  <Image src={calendar} alt={"calendar-date"} />
                  <p className="text-[#737373] text-[12px] font-[400] mt-1">{item.date}</p>
                </button>
              ))}
            </div>
            {/* <Accordion
              title="Informasi Pekerjaan"
              idAccordion={"sore" ? "" : "sore"}
              disabled={"sore" ? ("sore" ? true : false) : true}
            /> */}
            <div className="flex justify-end mt-3">
              <button className="bg-[#FAB317] text-white text-[14px] font-[600] rounded-[8px] h-[45px] w-[289px] justify-center mt-4">
                Ajukan Perubahan Jadwal
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default content;
