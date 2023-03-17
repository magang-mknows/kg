import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import rescheduleSimulasi from "@/assets/rescheduleSimulasi/dummyReschedule.svg";
import iconWarning from "@/assets/rescheduleSimulasi/iconWarning.svg";
import calendar from "@/assets/rescheduleSimulasi/calendar.svg";
import afternoon from "@/assets/rescheduleSimulasi/afternoon.svg";
import checklist from "@/assets/rescheduleSimulasi/checklist.svg";
import warning from "@/assets/rescheduleSimulasi/warning.svg";
import pengajuan from "@/assets/rescheduleSimulasi/pengajuan.svg";
import checked from "@/assets/rescheduleSimulasi/checked.svg";
import rescheduleJadwal from "@/assets/rescheduleSimulasi/reschedule-jadwal.svg";
import Accordion from "@/components/Simulasion/Accordion";
import { useChooseSimulation } from "@/hooks/Simulation/useChooseSimulation";
import { useCheckRescheduleSimulation } from "@/hooks/Simulation/useCheckRescheduleSimulation";
import PopupModal from "@/components/Common/PopupModal";
import { usePopupScheduleStatus } from "@/hooks/Common/usePopupScheduleStatus";

const Content: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState("");
  const { getChooseSimulation, setChooseSimulation } = useChooseSimulation();
  const { setPopupStatus, getPopupStatus } = usePopupScheduleStatus();
  const { getCheckRescheduleSimulation } = useCheckRescheduleSimulation();
  const [active, setactive] = useState("");

  return (
    <>
      <h1 className="text-[#262626] text-[28px] font-[700] mb-5 dark:text-white mt-5">
        Simulasi, Drill & Assessment
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
            +
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
            {getCheckRescheduleSimulation.map((item, l) => (
              <button
                className={` px-6 py-3 rounded-[8px] flex flex-row text-center justify-center mt-5 border text-[#737373] w-full ${
                  getChooseSimulation === item.date ? "bg-[#3EB449] text-white " : ""
                }`}
                key={l}
                onClick={() => {
                  setChooseSimulation(item.date);
                  setactive(item.date);
                }}
              >
                <Image src={calendar} alt={"calendar-date"} />
                <p
                  className={` text-[12px] font-[400] mt-1  ${
                    getChooseSimulation === item.date ? "text-white" : ""
                  }} `}
                >
                  {item.date}
                </p>
              </button>
            ))}
          </div>

          <Accordion title="Sore" iconImage={afternoon} idAccordion={isOpen === "" ? "open" : ""}>
            <div className="flex gap-5">
              {getCheckRescheduleSimulation.map((item) =>
                item.time
                  .filter(() => item.date.includes(active))
                  .map((items, i) => (
                    <button
                      key={i}
                      className={`flex flex-row text-center  gap-2  py-2 px-3 rounded-[8px] border text-[#525252] ${
                        getChooseSimulation === items.time ? "bg-[#3EB449] text-white" : ""
                      } `}
                      onClick={() => {
                        setChooseSimulation(items.time);
                      }}
                    >
                      <Image src={checklist} alt={"icon"} className="mt-1" height={10} />
                      <p className="font-[500] text-[12px]">{items.time}</p>
                    </button>
                  )),
              )}
            </div>
          </Accordion>

          <div className="flex justify-end mt-3">
            <button
              onClick={() => setPopupStatus(true)}
              className="bg-[#3EB449] text-white text-[14px] font-[600] rounded-[8px] h-[45px] w-[289px] justify-center mt-4"
            >
              Ajukan Jadwal Simulasi
            </button>
          </div>
        </div>

        <div>
          <PopupModal
            icon={checked}
            image={pengajuan}
            popupTitle="Berhasil Mengajukan Simulasi!"
            stylePopup={"font-[700] text-[16px] md:text-[20px] lg:text-[23.4px]"}
            lookup={getPopupStatus}
            className="!h-85 w-[100%] text-md py-10"
            onClose={() => setPopupStatus(false)}
          >
            <p className="text-[#A3A3A3] font-[600] lg:text-[20px] md:text-[18px]">
              Kamu telah mengajukan simulasi di hari Senin, 17 Januari 2023 Pukul 16:30 WIB, Link
              Zoom simulasi akan dikirimkan melalui email.
            </p>
          </PopupModal>
        </div>
        <div>
          <PopupModal
            icon={warning}
            image={rescheduleJadwal}
            popupTitle="Reschedule Jadwal"
            stylePopup={"font-[700] text-[16px] md:text-[20px] lg:text-[23.4px]"}
            lookup={getPopupStatus}
            className="!h-85 w-[100%] text-md py-10"
            onClose={() => setPopupStatus(false)}
          >
            <p className="text-[#A3A3A3] font-[600] lg:text-[20px] md:text-[18px]">
              Kamu telah mengajukan Reschedule Jadwal pertemuan simulasi, silahkan menunggu jadwal
              simulasi terbaru.
            </p>
          </PopupModal>
        </div>
      </div>
    </>
  );
};

export default Content;
