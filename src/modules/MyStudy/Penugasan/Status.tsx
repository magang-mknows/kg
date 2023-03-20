import { FC, ReactElement, useState, useEffect } from "react";
import folder from "@/assets/status/folder.svg";
import pdf from "@/assets/status/pdf.svg";
import Image from "next/image";
import GlobalButton from "@/components/Common/GlobalButton";
import UploadDragbleField from "@/components/Common/UploadDragbleField";
import UploadField from "@/components/Common/UploadField";
import { useInstruction } from "@/hooks/MyStudy/useInstruction"; 


const Status: FC = (): ReactElement => {
  const { getInstruction } = useInstruction();

  const tabelState: {
    namaTabel: string;
    response: string;
  }[] = [
    { namaTabel: "Status Pengumpulan", response: "Belum Mengumpulkan" },
    { namaTabel: "Status Penilaian", response: "Belum dinilai" },
    { namaTabel: "Tanggal batas pengumpulan ", response: getInstruction[0].deadline },
    { namaTabel: "Waktu tersisa", response: "Telah melewati batas waktu" },
    { namaTabel: "Terakhir diubah", response: "" },
    { namaTabel: "Pengiriman Tugas", response: "link" },
  ];

  const lateState = (): string => {
    if (tabelState[3].response === "Telah melewati batas waktu") {
      return "bg-[#ffc4c4]";
    }
    return "bg-none";
  };
  return (
    <>
      <section
        style={{ marginLeft: "109px", marginRight: "109px" }}
        className="scale-[0.8] lg:scale-[1] bg-white my-[96px] py-[92px] px-[72px] w-full"
      >
        <p className="text-[20px] font-semibold mb-[8px]">{getInstruction[0].matkul}</p>
        <p className="text-[16px] font-medium mb-[8px]">Tugas [Pertemuan ke-{getInstruction[0].pertemuan}]</p>
        <p className="text-[16px] font-medium mb-[8px]">{getInstruction[0].dosen}</p>
        <p className="text-[14px] mb-[35px] font-normal">{getInstruction[0].waktu}</p>
        <p className="text-[16px] font-normal">
          Silahkan baca dan kerjakan tugas pada modul berikut ini.
        </p>
        <Image
          src={pdf}
          alt="File tugas"
          className="inline-block mr-[8px] scale-[0.8] lg:scale-[1]"
        />
        <p className="inline">{getInstruction[0].file}</p>

        <div className="mt-[36px]">
          <p className="text-[20px] font-semibold mb-[25px]">Status Penugasan</p>
          <div className="grid grid-cols-4 lg:text-[12px] text-[10px]">
            {tabelState.map((row) => {
              return (
                <>
                  <div className="col-span-1 bg-[#F5F5F5] py-[20px] px-[20px] border-solid border-b-[1px] border-[#D4D4D4] font-semibold">
                    {row.namaTabel}
                  </div>
                  <div
                    className={`col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-[#D4D4D4] font-medium ${
                      row.namaTabel === "Pengiriman Tugas" && "text-[#106FA4]"
                    }
                    ${
                      row.response === "Belum Mengumpulkan"
                        ? lateState()
                        : row.response === "Terkirim" && "bg-[#C2F7B6]"
                    }
                    ${row.response === "Telah melewati batas waktu" && "text-[#EE2D24] font-bold"}`}
                  >
                    {row.response}
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* codingan sesuai figma ⬇️⬇️⬇️*/}
        {/* <div
          className="border-dashed border-2 border-[#D4D4D4] mt-[28px] py-[46px]"
          // onDragOver={handleDrag}
          // onDrop={handleDrop}
        >
          <Image
            src={folder}
            alt="insert folder"
            className="mx-auto mb-[20px] scale-[0.8] lg:scale-[1]"
          />
          <p className="text-center">
            Seret, taruh dan <span className="text-[#106FA4]">pilih file</span> untuk mengunggah
          </p>
          <div className="scale-[0.8] lg:scale-[1] lg:w-[450px] grid grid-cols-4 text-[14px] mx-auto mt-[10px] border-solid border-[1px] rounded-lg ">
            <div className="col-span-1 bg-[#D4D4D4] py-[16px] text-center">Pilih file</div>
            <div className="col-span-3 py-[16px] px-[16px]">Belum memilih tugas</div>
          </div>
        </div> */}

        <UploadDragbleField
          name="upload"
          className="border-dashed border-2 border-[#D4D4D4] mt-[28px]"
          required={true}
        />
        <UploadField name="area" />
        <p className="text-[#A3A3A3] text-[14px] font-medium my-[24px]">
          <span className="font-semibold">Note</span> : Pastikan berkas sudah sesuai dengan
          ketentuan
        </p>

        <GlobalButton
          text="Unggah Tugas"
          className="mx-auto"
          size="base"
          hasImg={false}
          hasExternal={false}
        />
      </section>
    </>
  );
};

export default Status;
