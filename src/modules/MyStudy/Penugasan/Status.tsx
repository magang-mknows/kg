import { FC, ReactElement, useState, useEffect } from "react";
import folder from "@/assets/status/folder.svg";
import pdf from "@/assets/status/pdf.svg";
import Image from "next/image";
import GlobalButton from "@/components/Common/GlobalButton";
import { useInstruction } from "@/hooks/MyStudy/useInstruction";
import { useForm } from "react-hook-form";
import ControlledUploadDragbleField from "@/components/ControlledInputs/ControlledUploadDragbleField";

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

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      upload: undefined,
      upload_media: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const lateState = (): string => {
    if (tabelState[3].response === "Telah melewati batas waktu") {
      return "bg-[#ffc4c4] dark:bg-[#a3342c]";
    }
    return "bg-transparent";
  };
  return (
    <>
      <section
        className="bg-white dark:bg-[#222529]  lg:py-[92px] md:py-[70px] py-[50px] lg:px-[109px] md:px-[70px] px-[50px] w-full"
      >
        <p className="text-[20px] font-semibold mb-[8px]">{getInstruction[0].matkul}</p>
        <p className="text-[16px] font-medium mb-[8px]">
          Tugas [Pertemuan ke-{getInstruction[0].pertemuan}]
        </p>
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
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-5 lg:text-[12px] text-[10px]">
            {tabelState.map((row) => {
              return (
                <>
                  <div className="lg:col-span-1 md:col-span-1 col-span-2 bg-[#F5F5F5] dark:bg-[#1B1E21] py-[20px] px-[20px] border-solid border-b-[1px] border-[#D4D4D4] font-semibold">
                    {row.namaTabel}
                  </div>
                  <div
                    className={`col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-[#D4D4D4] font-medium ${
                      row.namaTabel === "Pengiriman Tugas" && "text-[#106FA4]"
                    }
                    ${
                      row.response === "Belum Mengumpulkan"
                        ? lateState()
                        : row.response === "Terkirim" && "bg-[#C2F7B6] dark:bg-[#4c9b3b]"
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
        <form action="" onSubmit={onSubmit}>
          <ControlledUploadDragbleField
            control={control}
            name="upload_media"
            className="border-dashed border-2 border-[#D4D4D4] mt-[28px]"
          />
          <p className="text-[#A3A3A3] text-[14px] font-medium my-[24px]">
            <span className="font-semibold">Note</span> : Pastikan berkas sudah sesuai dengan
            ketentuan
          </p>
          <GlobalButton
            type="submit"
            text="Unggah Tugas"
            className="mx-auto"
            size="base"
            hasImg={false}
            hasExternal={false}
          />
        </form>
      </section>
    </>
  );
};

export default Status;
