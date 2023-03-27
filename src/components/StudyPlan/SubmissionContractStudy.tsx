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

const SubmissionContractStudy: FC = (): ReactElement => {
  const { getDataTable } = useDataTable();
  const { getDataCard } = useDataCard();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmCardStudy();

  return (
    <div className="flex flex-col w-full lg:px-16 px-0 py-6 overflow-auto">
      <div className="flex p-8 py-4 w-[100%] ">
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
          className="lg:text-center text-start text-md ml-80 "
          size="regular"
          color="greenBorder"
          text="Download Silabus"
          hasImg={true}
          icon={Download}
        />
      </div>
      <div className="px-4 mx-auto md:w-full">
        <div className="my-6 flex mx-4">
          <table className="mx-auto w-auto border border-gray-200 rounded-lg divide-y divide-neutral-400 dark:divide-gray-700 w-full">
            <thead className=" bg-gray-100 w-full">
              <tr>
                <th className="p-3 rounded-md">No.</th>
                <th className="text-start ">Mata Kuliah</th>
                <th className="text-start">Kode Matkul</th>
                <th className="text-start">SKS</th>
                <th className="text-start">Semester</th>
                <th className="text-start">Jumlah Pertemuan</th>
              </tr>
            </thead>
            {getDataTable.map((x, i) => (
              <tbody key={i} className="divide-y dark:divide-gray-700  ">
                <tr className="border">
                  <td className="p-3 text-center">{x.no}</td>
                  <td>
                    <div className="flex justify-center w-full gap-4 p-4">
                      <div>
                        <Image src={x.img} alt="User" />
                      </div>
                      <div className="flex w-full flex-col w-auto">
                        <h1 className="font-bold text-start">{x.matkul}</h1>
                        <p className="text-gray-400 text-start">{x.jmlh_mahasiswa}</p>
                      </div>
                    </div>
                  </td>
                  <td>{x.kode_matkul}</td>
                  <td>{x.jmlh_sks} SKS</td>
                  <td>Semester {x.semester}</td>
                  <td>{x.jmlh_pertemuan} Pertemuan</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>

      <div>
        <PopupModal
          onClose={() => setPopupStatus(false)}
          icon={Confirm}
          popupTitle="Konfirmasi"
          lookup={getPopupStatus}
          className="!h-80 !w-[100%] text-md py-10"
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
              className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
              onClick={() => setPopupStatus(false)}
              type={"button"}
            />
            <Button
              className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
              type={"button"}
              text="Konfirmasi"
              page={"/kontrak-krs/detail"}
            />
          </div>
        </PopupModal>
      </div>
    </div>
  );
};

export default SubmissionContractStudy;
