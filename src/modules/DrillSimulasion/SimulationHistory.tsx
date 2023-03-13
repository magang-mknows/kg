import { FC, ReactElement } from "react";
import Image from "next/image";
import Done from "@/assets/assigned-done.svg";
import { useRecoilValue } from "recoil";
import { useHistorySimulation } from "@/hooks/Simulation/useHistorySimulation";
import { filterHistorySimulation } from "@/stores/Simulation";
import simulasiNull from "@/assets/simualasi-null.svg";
import { usePopupSubmissionStatus } from "@/hooks/Common/usePopupSubmissionStatus";
import Link from "next/link";
import PopupModal from "@/components/Common/PopupModal";
import simulasiDone from "@/assets/simulasi-done.svg";
import simulasiChecked from "@/assets/simulasi-checked.svg";

const SimulationHistory: FC = (): ReactElement => {
  // const { getHistorySimulation } = useHistorySimulation();
  const getHistorySimulation = useRecoilValue(filterHistorySimulation);
  const { setPopupStatus, getPopupStatus } = usePopupSubmissionStatus();

  return (
    <div className="md:px-8 px-4 py-0 ">
      <>
        {getHistorySimulation.length === 0 ? (
          <div className="flex flex-col align-center items-center">
            <Image src={simulasiNull} alt="simulasi-null" />
            <h1 className="text-black">Belum ada riwayat simulasi yang tersedia.</h1>
          </div>
        ) : (
          <>
            {getHistorySimulation.map((items, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row bg-[#ffffff] rounded-lg drop-shadow-lg relative justify-between  mb-5 md:items-center ${
                  items.status === "selesai" ? "cursor-pointer" : ""
                }`}
                onClick={
                  items.status === "selesai"
                    ? () => setPopupStatus(true)
                    : () => setPopupStatus(false)
                }
              >
                <div
                  className={`flex absolute -left-0 top-0 rounded-tl-lg rounded-bl-lg h-full w-2 ${
                    items.status === "selesai" ? "bg-[#3EB449]" : "bg-[#FAB317]"
                  }`}
                />
                <div className="flex lg:flex-row flex-col items-center">
                  <Image
                    alt="Image"
                    src={items.src}
                    className="md:w-[217px] w-max object-contain md:ml-10 mx-auto mt-5 lg:mt-0"
                  />
                  <div className="banner md:px-8 px-5 md:py-6 py-4 ">
                    <h1 className="md:text-[20px] text-[18px] font-[700] text-[#262626]">
                      {items.title}
                    </h1>
                    <p className="text-[#A3A3A3] font-[400] md:text-[16px] text-[14px] lg:mt-3 md:mt-2 mt-0">
                      {items.dosen}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:items-center items-start mr-6 md:mr-0 md:px-8 px-5  mb-7 md:py-0">
                  {items.status === "selesai" ? (
                    <>
                      <Image alt="Image" src={Done} className="md:mt-3 mt-0 md:w-[21px] w-[19px]" />

                      <p className="md:text-[16px] text-[14px] font-[600] text-[#3EB449]">
                        Selesai
                      </p>
                    </>
                  ) : (
                    <Link href={"/drill-simulation/" + items.slug}>
                      <button className="bg-[#FAB317] text-white md:text-[14px] text-[12px] font-[600] rounded-[8px] px-4 py-2 md:w-[230px] w-[200px] md:h-[36px] h-[30px] md:mt-3 mt-0">
                        Ajukan Perubahan Jadwal
                      </button>
                    </Link>
                  )}

                  <div className="flex flex-row text-[#262626] md:text-[16px] text-[14px] font-[400] mt-2  ">
                    <p>{items.date}</p>
                    <p className="px-2">|</p>
                    <p>{items.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </>
      <div>
        <PopupModal
          icon={simulasiChecked}
          image={simulasiDone}
          popupTitle="Anda Telah Selesai Melakukan Simulasi!"
          lookup={getPopupStatus}
          className="!h-90 w-[100%] text-md py-10"
          onClose={() => setPopupStatus(false)}
        >
          <p className="text-[#A3A3A3] font-[600] text-[20px]">
            Kamu telah melakukan simulasi di hari{" "}
            <span className="text-[#737373]">Senin, 17 Januari 2023 Pukul 16:30 WIB.</span>
          </p>
        </PopupModal>
      </div>
    </div>
  );
};

export default SimulationHistory;
