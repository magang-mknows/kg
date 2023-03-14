import { FC, ReactElement } from "react";
import Image from "next/image";
import rescheduleSimulasi from "@/assets/rescheduleSimulasi/dummyReschedule.svg";
import iconWarning from "@/assets/rescheduleSimulasi/iconWarning.svg";
import calendar from "@/assets/rescheduleSimulasi/calendar.svg";

const content: FC = (): ReactElement => {
  return (
    <>
      <h1 className="text-[#262626] text-[28px] font-[700] mb-5">
        Reschedule Simulasi, Drill & Assessment
      </h1>
      <div className="flex lg:flex-row flex-col gap-16">
        <div className=" lg:basis-5/12">
          <Image src={rescheduleSimulasi} alt={"reshedule-image"} />
          <div className="flex flex-row mt-3">
            <Image src={iconWarning} alt={"warning"} />
            <p className="ml-2 text-[#171717] text-[18px] font-[600]">
              Informasi Mengenai Drill Simulasi & Assessment
            </p>
          </div>
          <p className="mt-3 text-[#171717] text-[14px] font-[400] text-justify">
            1. Peserta harus memastikan bahwa perangkat dan teknologi yang digunakan untuk drill
            simulasi & assessment berfungsi dengan baik. Pastikan bahwa peserta memiliki akses yang
            cukup dan perangkat yang dapat mendukung drill simulasi & assessment pada LMS. <br />
            2. Sebelum memulai drill simulasi & assessment pada LMS, pastikan bahwa peserta telah
            diberikan instruksi yang jelas dan sasaran yang harus dicapai. Sasaran harus sesuai
            dengan kemampuan dan kebutuhan dari setiap individu yang terlibat dalam drill tersebut.
          </p>
        </div>
        <div className="lg:basis-7/12">
          <h1 className="text-[#171717] text-[20px] font-[600]">Sales dan Penjualan</h1>
          <p className="text-[#737373] text-[16px] font-[400] mt-2 mb-1">
            Bambang Sutiyoso, S.Ak, M.Ak
          </p>
          <p className="text-[#737373] text-[16px] font-[400]">Lokasi : Zoom Meeting</p>

          <p className="text-[#171717] text-[14px] font-[600] mt-3 mb-2">
            Pilih tanggal dan waktu Simulasi
          </p>
          <div className="flex flex-row gap-4">
            <button className="outline outline-[#737373] px-4 py-3 rounded-[1.67px] flex flex-row text-center justify-center mt-5 border">
              <Image src={calendar} alt={"calendar-date"} />
              <p className="text-[#737373] text-[12px] font-[400] mt-1">Senin, 17 Januari 2023</p>
            </button>
            <button className="outline outline-[#737373] px-4 py-3 rounded-[1.67px] flex flex-row text-center justify-center mt-5">
              <Image src={calendar} alt={"calendar-date"} />
              <p className="text-[#737373] text-[12px] font-[400] mt-1">Senin, 17 Januari 2023</p>
            </button>
            <button className="outline outline-[#737373] px-4 py-3 rounded-[1.67px] flex flex-row text-center justify-center mt-5">
              <Image src={calendar} alt={"calendar-date"} />
              <p className="text-[#737373] text-[12px] font-[400] mt-1">Senin, 17 Januari 2023</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default content;
