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
        <table className="min-w-full border border-gray-200  rounded-lg divide-y divide-neutral-400 dark:divide-gray-700">
          <thead className=" bg-gray-100 ">
            <tr>
              <th className="p-3 rounded-md">No.</th>
              <th className="text-start ">Mata Kuliah</th>
              <th className="text-start">Kode Matkul</th>
              <th className="text-start">SKS</th>
              <th className="text-start">Semester</th>
              <th className="text-start">Tindakan</th>
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
                      <p className="text-gray-400 text-start">
                        {x.jmlh_mahasiswa} Mahasiswa Terdaftar
                      </p>
                    </div>
                  </div>
                </td>
                <td>{x.kode_matkul}</td>
                <td>{x.jmlh_sks} SKS</td>
                <td>Semester {x.semester} </td>
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
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th scope="row" className="px-6 py-3 text-base">
                Total SKS
              </th>
              <td></td>
              <td></td>
              <td className="font-bold">12 SKS</td>
            </tr>
          </tfoot>
        </table>
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
