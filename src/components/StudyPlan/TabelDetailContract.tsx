import { FC, ReactElement } from "react";
import Image from "next/image";
import { useDataTable } from "@/hooks/StudyPlan/useDataTable";
import Confirm from "@/assets/StudyPlan/Confirm.svg";
import Success from "@/assets/StudyPlan/Success.svg";
import SuspenseError from "@/modules/Common/SuspenseError";
import Button from "../Common/Button";
import { usePopupConfirmStatus } from "@/hooks/Common/usePopupConfirmSatus";
import { usePopupSucces } from "@/hooks/Common/usePopupSucces";
import { usePopupAddStudy } from "@/hooks/Common/UsePopupAddStudy";

import PopupModal from "@/components/Common/PopupModal";
import { moveProps } from "./types";
const TabelDetailContract: FC<moveProps> = ({ onClick, onMove }): ReactElement => {
  const { getDataTable } = useDataTable();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmStatus();
  const { setPopupSuccess, getPopupSuccess } = usePopupSucces();
  const { setPopupAdd, getPopupAdd } = usePopupAddStudy();

  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-12 overflow-auto whitespace-nowrap mx-auto border bg-gray-100 border-gray-200 rounded-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
          <div className="bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold col-span-1 lg:text-[16px] text-[10px] dark:bg-transparent">
            No.
          </div>
          <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-4 lg:text-[16px] text-[10px] dark:bg-transparent">
            <p>Mata</p>
            <p> Kuliah</p>
          </div>
          <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] text-[10px] dark:bg-transparent">
            <p>Kode </p>
            <p>Matkul</p>
          </div>
          <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-1 lg:text-[16px] text-[10px] dark:bg-transparent">
            SKS
          </div>
          <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
            Semester
          </div>
          <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
            Tindakan
          </div>

          {getDataTable.map((x, i) => (
            <>
              <div className="border-t border-[#E5E5E5] bg-gray-100 text-center md:text-[16px] p-3 font-medium col-span-1 lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.no}
              </div>
              <div className="border-t border-[#E5E5E5] lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-medium col-span-4 lg:text-[16px] text-[10px] dark:bg-transparent">
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
              <div className="border-t border-[#E5E5E5] lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-medium col-span-2 lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.kode_matkul}
              </div>
              <div className="bg-gray-100 border-t border-[#E5E5E5] lg:text-start text-center py-3 font-medium col-span-1 lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.jmlh_sks}
              </div>
              <div className="bg-gray-100 border-t border-[#E5E5E5] lg:text-start text-center py-3 font-medium col-span-2 lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
                {x.semester}
              </div>
              <div className="bg-gray-100 border-t border-[#E5E5E5] dark:divide-gray-700 lg:text-start text-center py-3 font-medium col-span-2 md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
                <button
                  className={`flex gap-2 items-center p-4 font-semibold ${
                    x.tindakan_kontrak === "tambah" ? "text-blue-600" : "text-red-600"
                  }`}
                  onClick={() => setPopupStatus(true)}
                >
                  {x.tindakan_kontrak === "tambah" ? (
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
                        fill="#EE2D24"
                      />
                      <path
                        d="M16.4971 18.2445L12.188 13.9354L7.87885 18.2445L6.44247 16.8081L10.7516 12.499L6.44247 8.18986L7.87885 6.75348L12.188 11.0626L16.4971 6.75348L17.9335 8.18986L13.6244 12.499L17.9335 16.8081L16.4971 18.2445Z"
                        fill="white"
                      />
                    </svg>
                  )}

                  {x.tindakan_kontrak === "tambah" ? " tambah " : "hapus"}
                </button>
              </div>
            </>
          ))}
          <div className="border-t border-[#E5E5E5] bg-gray-100 lg:text-start text-center py-3 px-6 font-semibold col-span-6 md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
            Total SKS
          </div>
          <div className="border-t border-[#E5E5E5] bg-gray-100 lg:text-start text-center py-3 px-6 font-semibold col-span-6 md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
            24 SKS
          </div>
        </div>

        {/* <tfoot>
            <tr>
              <th scope="row" className="px-6 py-3 text-base">
                Total SKS
              </th>
              <td></td>
              <td></td>
              <td className="font-bold">12 SKS</td>
            </tr>
          </tfoot> */}

        <SuspenseError>
          <PopupModal
            onClose={() => setPopupStatus(false)}
            icon={Confirm}
            popupTitle="Konfirmasi"
            lookup={getPopupStatus}
            className="!h-80 !w-[100%] text-md py-10"
          >
            <h1 className="py-2 text-2xl">Apakah anda sudah mempelajari mata kuliah ini?</h1>
            <div className="flex gap-3 my-2 py-4">
              <Button
                text="Pernah"
                className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                onClick={() => {
                  setPopupSuccess(true);
                  setPopupStatus(false);
                }}
                type={"button"}
              />
              <Button
                className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
                type={"button"}
                text="Belum"
                onClick={() => {
                  setPopupAdd(true);
                  setPopupStatus(false);
                }}
              />
            </div>
          </PopupModal>
        </SuspenseError>
        <SuspenseError>
          <PopupModal
            onClose={() => setPopupSuccess(false)}
            icon={Success}
            popupTitle="Berhasil"
            lookup={getPopupSuccess}
            className="!h-80 !w-[100%] text-md py-10"
          >
            <h1 className="py-2 text-2xl">
              Mata kuliah berhasil di tambah ke <span className="font-bold">Konversi</span>
            </h1>
            <div className="flex gap-3 my-2 py-4">
              <Button
                text="Lihat Konversi"
                className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                onClick={onMove}
                type={"button"}
              />
              <Button
                className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
                type={"button"}
                text="Kembali"
                onClick={() => setPopupSuccess(false)}
              />
            </div>
          </PopupModal>
        </SuspenseError>
        <SuspenseError>
          <PopupModal
            onClose={() => setPopupSuccess(false)}
            icon={Success}
            popupTitle="Berhasil"
            lookup={getPopupAdd}
            className="!h-80 !w-[100%] text-md py-10"
          >
            <h1 className="py-2 text-2xl">
              Mata kuliah berhasil di tambah ke <span className="font-bold">Draft KRS</span>
            </h1>
            <div className="flex gap-3 my-2 py-4">
              <Button
                text="Lihat Draft KRS"
                className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                onClick={onClick}
                type={"button"}
              />
              <Button
                className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
                type={"button"}
                text="Kembali"
                onClick={() => setPopupAdd(false)}
              />
            </div>
          </PopupModal>
        </SuspenseError>
      </div>
    </>
  );
};

export default TabelDetailContract;
