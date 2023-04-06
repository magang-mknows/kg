import { FC, ReactElement } from "react";
import Confirm from "@/assets/StudyPlan/Confirm.svg";
import PopupModal from "@/components/Common/PopupModal";
import Image from "next/image";
import { useDataTable } from "@/hooks/StudyPlan/useDataTable";
import { useDataCard } from "@/hooks/StudyPlan/useDataCard";
import Download from "@/assets/StudyPlan/download1.svg";
import Warning from "@/assets/StudyPlan/warning.svg";
import { usePopupConfirmCardStudy } from "@/hooks/Common/usePopupConfirmCardStudy";
import SuspenseError from "@/modules/Common/SuspenseError";
import NavbarSkeleton from "../Navbar";
import BreadcrumbAssignment from "../Assigment/Breadcrumb";

const SubmissionContractSkeleton: FC = (): ReactElement => {
  const { getDataTable } = useDataTable();
  const { getDataCard } = useDataCard();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmCardStudy();

  return (
    <div className="animate-pulse">
      <NavbarSkeleton />
      <BreadcrumbAssignment />
      <div className="flex flex-col w-full px-0 py-6 lg:px-16">
        <div className="flex p-8 py-4 w-[100%]">
          <div className="flex flex-col py-4 pb-4">
            <div className="flex gap-6">
              <section className="flex items-center justify-center text-xl font-semibold text-transparent bg-gray-200 rounded-md lg:text-2xl">
                Pengajuan Kartu Rencana Study
              </section>
              <section className="text-center lg:!w-44 !w-36 lg:!h-14 !h-10 lg:text-lg text-md py-4 bg-[#3EB449] rounded-md" />
            </div>
            <div className="flex flex-row py-2 lg:text-xl text-md">
              <div className="flex w-full jutify-start">
                <span>Jurusan</span>
              </div>
              <div className="flex items-start justify-start w-full">
                <span> : Teknik Informatika</span>
              </div>
            </div>
            <div className="flex flex-row py-2 lg:text-xl text-md">
              <div className="flex w-full jutify-start">
                <span>Semester saat ini</span>
              </div>
              <div className="flex items-start justify-start w-full">
                <span> : Teknik Informatika</span>
              </div>
            </div>
            <div className="flex flex-row py-2 lg:text-xl text-md">
              <div className="flex w-full jutify-start">
                <span>Total Sks</span>
              </div>
              <div className="flex items-start justify-start w-full">
                <span> : Teknik Informatika</span>
              </div>
            </div>
            <div className="flex flex-row py-2 lg:text-xl text-md">
              <div className="flex w-full jutify-start">
                <span>label</span>
              </div>
              <div className="flex items-start justify-start w-full">
                <span> : Teknik Informatika</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-8 py-4 w-[100%]">
          <div className="flex flex-col py-4 pb-4">
            <div className="flex gap-6">
              <h1 className="flex items-center justify-center text-xl font-semibold lg:text-2xl">
                Pengajuan Kartu Rencana Study
              </h1>
              <div>
                {/* <GlobalButton
                  className="text-center lg:!w-44 !w-36 lg:!h-14 !h-10 lg:text-lg text-md py-4 bg-[#3EB449]"
                  text="+ Mengajukan"
                  onClick={() => setPopupStatus(true)}
                  hasImg={false}
                /> */}
              </div>
            </div>
            {/*isi span dari API */}
            {getDataCard.map((x, i) => (
              <p key={i} className="flex py-2 lg:text-xl text-md">
                <div className="flex w-full jutify-start">
                  <span>{x.label}</span>
                </div>
                <div className="flex items-start justify-start w-full">
                  <span> : {x.desc}</span>
                </div>
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end ">
          {/* <GlobalButton
            className="mx-4 lg:text-center text-start text-md lg:ml-80 "
            size="regular"
            color="greenBorder"
            text="Download Silabus"
            hasImg={true}
            icon={Download}
          /> */}
        </div>
        <div className="px-4 mx-auto md:w-full">
          <div className="flex mx-4 my-6">
            <div className="grid grid-cols-12 overflow-auto whitespace-nowrap mx-auto border border-[#E5E5E5] rounded-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
              <div className="bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
                No.
              </div>
              <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-3 lg:text-[16px] text-[12px] dark:bg-transparent">
                <p>Mata</p>
                <p> Kuliah</p>
              </div>
              <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] text-[12px] dark:bg-transparent">
                <p>Kode </p>
                <p>Matkul</p>
              </div>
              <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] text-[12px] dark:bg-transparent">
                SKS
              </div>
              <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] md:text-[16px] text-[12px] dark:bg-transparent">
                Semester
              </div>
              <div className="lg:flex md:flex md:gap-[4px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
                <p>Jumlah</p>
                <p>Pertemuan</p>
              </div>

              {getDataTable.map((x, i) => (
                <>
                  <div
                    key={i}
                    className="p-3 text-center border-t border-[#E5E5E5] dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px]"
                  >
                    {x.no}
                  </div>
                  <div className="border-t border-[#E5E5E5] dark:divide-gray-700 col-span-3 lg:text-[16px] md:text-[16px] text-[12px]">
                    <div className="w-full p-4 lg:flex lg:justify-center lg:gap-4">
                      <Image src={x.img} alt="User" />
                      <div className="flex flex-col w-auto w-full">
                        <h1 className="pt-3 font-bold text-start ">{x.matkul}</h1>
                        <p className="pt-3 text-gray-400 text-start">{x.jmlh_mahasiswa}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#E5E5E5] dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center">
                    {x.kode_matkul}
                  </div>
                  <div className="pt-3 border-t border-[#E5E5E5] dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center">
                    {x.jmlh_sks} SKS
                  </div>
                  <div className="pt-3 border-t border-[#E5E5E5] dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center">
                    {x.semester}
                  </div>
                  <div className="pt-3 border-t border-[#E5E5E5] dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center">
                    {x.jmlh_pertemuan} Pertemuan
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionContractSkeleton;
