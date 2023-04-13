import { FC, ReactElement } from "react";
import Confirm from "@/assets/StudyPlan/Confirm.svg";
import Button from "../Common/Button";
import PopupModal from "@/components/Common/PopupModal";
import Image from "next/image";
import GlobalButton from "../Common/GlobalButton";
import { useDataTable } from "@/hooks/StudyPlan/useDataTable";
import { useDataCard } from "@/hooks/StudyPlan/useDataCard";
import Download from "@/assets/StudyPlan/download1.svg";
import Warning from "@/assets/StudyPlan/warning.svg";
import { usePopupConfirmCardStudy } from "@/hooks/Common/usePopupConfirmCardStudy";
import SuspenseError from "@/modules/Common/SuspenseError";
import Loading from "../Loading";

const SubmissionContractStudy: FC = (): ReactElement => {
  const { getDataTable } = useDataTable();
  const { getDataCard } = useDataCard();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmCardStudy();

  return (
    <div className="flex flex-col w-full lg:px-16 px-0 py-6">
      <div className="flex p-8 py-4 w-[100%]">
        <div className="flex flex-col py-4 pb-4">
          <div className="flex gap-6">
            <h1 className="flex lg:text-2xl text-xl justify-center items-center font-semibold">
              Pengajuan Kartu Rencana Study
            </h1>
            <div>
              <GlobalButton
                className="text-center lg:!w-44 !w-36 lg:!h-14 !h-10 lg:text-lg text-md py-4 bg-[#3EB449]"
                text="+ Mengajukan"
                onClick={() => setPopupStatus(true)}
                hasImg={false}
              />
            </div>
          </div>
          {/*isi span dari API */}
          {getDataCard.map((x, i) => (
            <p key={i} className="flex lg:text-xl py-2 text-md">
              <div className="flex w-full jutify-start">
                <span>{x.label}</span>
              </div>
              <div className="flex w-full justify-start items-start">
                <span> : {x.desc}</span>
              </div>
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center ">
        <GlobalButton
          className="lg:text-center text-start text-md mx-4 lg:ml-80 "
          size="regular"
          color="greenBorder"
          text="Download Silabus"
          hasImg={true}
          icon={Download}
        />
      </div>

      <div className="p-8 overflow-auto whitespace-nowrap">
        <div className="grid grid-flow-row auto-rows-auto">
          {/* thead⬇️⬇️⬇️⬇️ */}
          <div className="grid grid-flow-col auto-cols-min mx-auto border bg-gray-100 border-gray-200 rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="w-[88px] bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              No.
            </div>
            <div className="lg:w-[353px] md:w-[225px] w-[180px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              Mata Kuliah
            </div>
            <div className="w-[176px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              Kode Matkul
            </div>
            <div className="w-[88px] bg-gray-100 lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              SKS
            </div>
            <div className="w-[176px] bg-gray-100 lg:text-start text-center py-3 font-semibold lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
              Semester
            </div>
            <div className="w-[177px] bg-gray-100 lg:text-start text-center py-3 font-semibold md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              Jumlah Pertemuan
            </div>
          </div>

          {getDataTable.map((x, i) => (
            <div
              key={i}
              className="grid grid-flow-col auto-cols-min mx-auto border bg-gray-100 border-gray-200 rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]"
            >
              <div className="w-[88px] border-t border-[#E5E5E5] bg-gray-100 text-center md:text-[16px] p-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.no}
              </div>
              <div className="lg:w-[353px] md:w-[225px] w-[180px] border-t border-[#E5E5E5] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                <div className="lg:flex lg:justify-center w-full lg:gap-4 p-4">
                  <div>
                    <Image src={x.img} alt="User" />
                  </div>
                  <div className="flex w-full flex-col w-auto">
                    <h1 className="font-bold text-start">{x.matkul}</h1>
                    <p className="text-gray-400 text-start">
                      {x.jmlh_mahasiswa} Mahasiswa Terdaftar
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[176px] border-t border-[#E5E5E5] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.kode_matkul}
              </div>
              <div className="w-[88px] bg-gray-100 border-t border-[#E5E5E5] lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.jmlh_sks}
              </div>
              <div className="w-[176px] bg-gray-100 border-t border-[#E5E5E5] lg:text-start text-center py-3 font-medium lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
                {x.semester}
              </div>
              <div className="w-[177px] bg-gray-100 border-t border-[#E5E5E5] dark:divide-gray-700 lg:text-start text-center py-3 font-medium md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.jmlh_pertemuan} Pertemuan
              </div>
            </div>
          ))}
        </div>
      </div>

      <SuspenseError loadingFallback={<Loading />}>
        <PopupModal
          onClose={() => setPopupStatus(false)}
          icon={Confirm}
          popupTitle="Konfirmasi"
          lookup={getPopupStatus}
          className="!h-80 lg:!w-[100%] text-md py-10"
        >
          <h1 className="py-2">
            Kamu akan mengajukan program study{" "}
            <span className="font-bold">Software Engineering</span>
          </h1>
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <div className="flex gap-2">
              <Image src={Warning} alt="warning" />
              <span className="block sm:inline">
                Kamu tidak dapat mengganti Program Studi yang telah dipilih
              </span>
            </div>
          </div>
          <div className="flex gap-3 my-2 py-4">
            <Button
              text="Batal"
              className="lg:w-[230px] lg:h-[56px] w-[100px] h-[56px] h border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
              onClick={() => setPopupStatus(false)}
              type={"button"}
            />
            <Button
              className="lg:w-[230px] lg:h-[56px] w-[110px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
              type={"button"}
              text="Konfirmasi"
              page={"/kontrak-krs/detail"}
            />
          </div>
        </PopupModal>
      </SuspenseError>
    </div>
  );
};

export default SubmissionContractStudy;
