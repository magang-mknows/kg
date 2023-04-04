import { FC, ReactElement } from "react";
import Image from "next/image";
import { useDataTable } from "@/hooks/StudyPlan/useDataTable";
import { usePopupDeleteStudy } from "@/hooks/Common/usePopupDeleteStudy";

import Button from "../Common/Button";
import Delete from "@/assets/StudyPlan/Delete.svg";
import PopupModal from "../Common/PopupModal";

const TabelDraft: FC = (): ReactElement => {
  const { getDataTable } = useDataTable();
  const { setPopupDelete, getPopupDelete } = usePopupDeleteStudy();

  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-12 overflow-auto whitespace-nowrap mx-auto border bg-gray-100 border-gray-200 rounded-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
          <div className="bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
            No.
          </div>
          <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-4 lg:text-[16px] text-[12px] dark:bg-transparent">
            <p>Mata</p>
            <p> Kuliah</p>
          </div>
          <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] text-[12px] dark:bg-transparent">
            <p>Kode </p>
            <p>Matkul</p>
          </div>
          <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
            SKS
          </div>
          <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] md:text-[16px] text-[12px] dark:bg-transparent">
            Semester
          </div>
          <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
            Tindakan
          </div>

          {getDataTable.map((x, i) => (
            <>
              <div className="border-t border-[#E5E5E5] bg-gray-100 text-center md:text-[16px] p-3 font-medium col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
                {x.no}
              </div>
              <div className="border-t border-[#E5E5E5] lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-medium col-span-4 lg:text-[16px] text-[12px] dark:bg-transparent">
                <div className="flex justify-center w-full gap-4 p-4">
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
              <div className="border-t border-[#E5E5E5] lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-medium col-span-2 lg:text-[16px] text-[12px] dark:bg-transparent">
                {x.kode_matkul}
              </div>
              <div className="bg-gray-100 border-t border-[#E5E5E5] lg:text-start text-center py-3 font-medium col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
                {x.jmlh_sks}
              </div>
              <div className="bg-gray-100 border-t border-[#E5E5E5] lg:text-start text-center py-3 font-medium col-span-2 lg:text-[16px] md:text-[16px] text-[12px] dark:bg-transparent">
                {x.semester}
              </div>
              <div className="bg-gray-100 border-t border-[#E5E5E5] dark:divide-gray-700 lg:text-start text-center py-3 font-medium col-span-2 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
              <button
                  onClick={() => setPopupDelete(true)}
                  className={`flex gap-2 items-center p-4 font-semibold ${
                    x.tindakan_draft === "tambah" ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {x.tindakan_draft === "tambah" ? (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.311523"
                        width="24.3762"
                        height="24.3762"
                        rx="12.1881"
                        fill="#106FA4"
                      />
                      <path
                        d="M19.298 13.515H13.204V19.6091H11.1727V13.515H5.07861V11.4837H11.1727V5.38965H13.204V11.4837H19.298V13.515Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.09429 17.1092C1.09429 18.2264 2.00839 19.1405 3.12564 19.1405H11.251C12.3683 19.1405 13.2824 18.2264 13.2824 17.1092V4.92109H1.09429V17.1092ZM14.298 1.87407H10.7432L9.72752 0.858398H4.64915L3.63347 1.87407H0.0786133V3.90542H14.298V1.87407Z"
                        fill="#EE2D24"
                      />
                    </svg>
                  )}

                  {x.tindakan_draft === "tambah" ? " tambah " : "hapus"}
                </button>
              </div>
            </>
          ))}
          <div className="border-t border-[#E5E5E5] bg-gray-100 lg:text-start text-center py-3 px-6 font-semibold col-span-6 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
            Total SKS
          </div>
          <div className="border-t border-[#E5E5E5] bg-gray-100 lg:text-start text-center py-3 px-6 font-semibold col-span-6 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
            24 SKS
          </div>
        </div>
        <div>
          <PopupModal
            onClose={() => setPopupDelete(false)}
            icon={Delete}
            popupTitle="Konfirmasi"
            lookup={getPopupDelete}
            className="!h-80 !w-[100%] text-md py-10"
          >
            <h1 className="py-2 text-2xl">Apakah anda ingin mengahpus mata kuliah ini?</h1>
            <div className="flex gap-3 my-2 py-4">
              <Button
                text="Ya, Hapus"
                className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                onClick={() => setPopupDelete(false)}
                type={"button"}
              />
              <Button
                className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
                type={"button"}
                text="Tidak"
                onClick={() => setPopupDelete(false)}
              />
            </div>
          </PopupModal>
        </div>
      </div>
    </>
  );
};

export default TabelDraft;
