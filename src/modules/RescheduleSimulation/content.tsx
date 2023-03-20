import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import rescheduleSimulasi from "@/assets/rescheduleSimulasi/dummyReschedule.svg";
import iconWarning from "@/assets/rescheduleSimulasi/iconWarning.svg";
import afternoon from "@/assets/rescheduleSimulasi/afternoon.svg";
import warning from "@/assets/rescheduleSimulasi/warning.svg";
import pengajuan from "@/assets/rescheduleSimulasi/pengajuan.svg";
import checked from "@/assets/rescheduleSimulasi/checked.svg";
import rescheduleJadwal from "@/assets/rescheduleSimulasi/reschedule-jadwal.svg";
import Accordion from "@/components/Simulasion/Accordion";
import { useChooseSimulation } from "@/hooks/Simulation/useChooseSimulation";
import { useChooseTimeSimulation } from "@/hooks/Simulation/useChooseTimeSimulation";
import { useCheckRescheduleSimulation } from "@/hooks/Simulation/useCheckRescheduleSimulation";
import PopupModal from "@/components/Common/PopupModal";
import { usePopupScheduleStatus } from "@/hooks/Common/usePopupScheduleStatus";
import { useCategorySimulation } from "@/hooks/Simulation/useCategorySimulation";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const Content: FC = (): ReactElement => {
  const [isOpen] = useState("");
  const { getChooseSimulation, setChooseSimulation } = useChooseSimulation();
  const { getChooseTimeSimulation, setChooseTimeSimulation } = useChooseTimeSimulation();
  const { setPopupStatus, getPopupStatus } = usePopupScheduleStatus();
  const { getCheckRescheduleSimulation } = useCheckRescheduleSimulation();
  const [active, setactive] = useState("");
  const { getCategorySimulation, setCategorySimulation } = useCategorySimulation();
  console.log("data", getCategorySimulation);

  const onSucces = (): void => {
    setCategorySimulation("Active"), setPopupStatus(true);
  };
  // const onReschedule = () => {
  //   setCategorySimulation("Reschedule");
  //   setPopupStatus(true);
  // };

  return (
    <div className="px-6 md:px-8 lg:px-10">
      <h1 className="text-[#262626] text-[28px] font-[700] mb-5 dark:text-white mt-5 ">
        {getCategorySimulation == "Active" ? "Reschedule " : ""}
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
                className={` px-6 py-3 rounded-[8px] flex flex-row text-center justify-center mt-5 border w-full dark:text-white ${
                  getChooseSimulation === item.date
                    ? "bg-[#3EB449] dark:bg-[#17A2B8] border-none"
                    : ""
                }`}
                key={l}
                onClick={() => {
                  setChooseSimulation(item.date);
                  setactive(item.date);
                }}
              >
                <div
                  className={`flex items-center gap-2 text-[#737373] dark:text-white ${
                    getChooseSimulation === item.date ? "dark:text-white text-white" : ""
                  }`}
                >
                  <BsCalendarDate className="" />
                  <p className="text-[12px] font-[400] mt-1">{item.date}</p>
                </div>
              </button>
            ))}
          </div>
          <Accordion
            title="Sore"
            iconImage={afternoon}
            idAccordion={isOpen === "" ? "open" : ""}
            disabled={getChooseSimulation === "" ? true : false}
          >
            <div className="flex gap-5">
              {getCheckRescheduleSimulation.map((item) =>
                item.time
                  .filter(() => item.date.includes(active))
                  .map((items, i) => (
                    <button
                      key={i}
                      className={`flex flex-row text-center  gap-2 py-2 px-3 rounded-[8px] border ${
                        getChooseTimeSimulation === items.time
                          ? "bg-[#3EB449] dark:bg-[#17A2B8]"
                          : ""
                      } `}
                      onClick={() => {
                        setChooseTimeSimulation(items.time);
                      }}
                    >
                      <div
                        className={`flex items-center gap-2 text-[#525252] dark:text-white ${
                          getChooseTimeSimulation === items.time
                            ? " text-white dark:text-white"
                            : ""
                        }`}
                      >
                        <AiOutlineCheck className=" text-sm font-bold" />
                        <p className="font-[500] text-[12px]">{items.time}</p>
                      </div>
                    </button>
                  )),
              )}
            </div>
          </Accordion>

          <div className="flex justify-end mt-3">
            <button
              onClick={() => {
                getChooseSimulation != "" || getChooseTimeSimulation != "" ? onSucces() : "";
              }}
              className={` text-white text-[14px] font-[600] rounded-[8px] h-[45px] w-[289px] justify-center mt-4 ${
                getCategorySimulation === "Active"
                  ? "bg-[#FAB317]"
                  : "bg-[#3EB449] dark:bg-[#17A2B8]"
              }`}
            >
              {getCategorySimulation == "Active"
                ? "Ajukan Perubahan Simulasi "
                : "Ajukan Jadwal Simulasi"}
            </button>
          </div>

          {/* popUp */}
          <div>
            <PopupModal
              icon={getCategorySimulation === "" ? warning : checked}
              image={getCategorySimulation === "" ? rescheduleJadwal : pengajuan}
              popupTitle={
                getCategorySimulation === "Active"
                  ? "Berhasil Mengajukan Simulasi!"
                  : getCategorySimulation == "Reschedule"
                  ? "reschedule"
                  : ""
              }
              stylePopup={"font-[700] text-[16px] md:text-[20px] lg:text-[23.4px]"}
              lookup={getPopupStatus}
              className="!h-85 w-[100%] text-md py-10"
              onClose={() => setPopupStatus(false)}
            >
              <p className="text-[#A3A3A3] font-[600] lg:text-[20px] md:text-[18px]">
                Kamu telah mengajukan
                {getCategorySimulation === "Active" ? " Reschedule Jadwal pertemuan " : ""}
                simulasi <br /> di hari {`${getChooseSimulation}`} Pukul{" "}
                {`${getChooseTimeSimulation}`} WIB, Link Zoom simulasi akan dikirimkan melalui
                email.
              </p>
            </PopupModal>
          </div>
        </div>

        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default Content;
