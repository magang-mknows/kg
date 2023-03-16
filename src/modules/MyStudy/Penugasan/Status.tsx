import { FC, ReactElement } from "react";
import folder from "@/assets/status/folder.svg";
import pdf from "@/assets/status/pdf.svg";
import Image from "next/image";
import GlobalButton from "@/components/Common/GlobalButton";

const Status: FC = (): ReactElement => {
  const tabelState: {
    namaTabel: string;
    response: string;
  }[] = [
    { namaTabel: "Status Penilaian", response: "Belum Mengumpulkan" },
    { namaTabel: "Status Penilaian", response: "Belum dinilai" },
    { namaTabel: "Tanggal batas pengumpulan ", response: "25/02/2023 24:59 WIB" },
    { namaTabel: "Waktu tersisa", response: "2 hari 23 jam 12 menit 56 detik" },
    { namaTabel: "Terakhir diubah", response: "" },
    { namaTabel: "Terakhir diubah", response: "" },
  ];
  return (
    <>
      <section style={{marginLeft:"109px", marginRight:"109px"}} className="scale-[0.8] lg:scale-[1] bg-white my-[96px] py-[92px] px-[72px] w-full">
        <p className="text-[20px] font-semibold mb-[8px]">Accounting 1</p>
        <p className="text-[16px] font-medium mb-[8px]">Tugas [Pertemuan ke-1]</p>
        <p className="text-[16px] font-medium mb-[8px]">Post - Bob S.Kom, M.Kom-Dosen-0001</p>
        <p className="text-[14px] mb-[35px] font-normal">23 Febuari 2023, 9:19 AM</p>
        <p className="text-[16px] font-normal">Silahkan baca dan kerjakan tugas pada modul berikut ini.</p>
        <Image src={pdf} alt="File tugas" className="inline-block mr-[8px]"/>
        <p className="inline">Tugas1.pdf</p>

        <div className="mt-[36px]">
          <p className="text-[20px] font-semibold mb-[25px]">Status Penugasan</p>
          <div className="grid grid-cols-4 text-[12px]">
            {tabelState.map((row) => {
              return (
                <>
                  <div className="col-span-1 bg-[#F5F5F5] py-[20px] px-[20px] border-solid border-b-[1px] border-[#D4D4D4] font-semibold">
                    {row.namaTabel}
                  </div>
                  <div className="col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-[#D4D4D4] font-medium">
                    {row.response}
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="border-dashed border-2 border-[#D4D4D4] mt-[28px] py-[46px]">
          <Image src={folder} alt="insert folder" className="mx-auto mb-[20px]" />
          <p className="text-center">
            Seret, taruh dan <span className="text-[#106FA4]">pilih file</span> untuk mengunggah
          </p>
          <div className="w-[450px] grid grid-cols-4 text-[14px] mx-auto mt-[10px] border-solid border-[1px] rounded-lg ">
            <button className="col-span-1 bg-[#D4D4D4] py-[16px] text-center">Pilih file</button>
            <div className="col-span-3 py-[16px] px-[16px]">Belum memilih tugas</div>
          </div>
        </div>

        <p className="text-[#A3A3A3] text-[14px] font-medium my-[24px]"><span className="font-semibold">Note</span> : Pastikan berkas sudah sesuai dengan ketentuan</p>

        <GlobalButton text="Unggah Tugas" className="mx-auto" size="base" hasImg={false} hasExternal={false}/>
      </section>
    </>
  );
};

export default Status;
