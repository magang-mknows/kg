import { FC, ReactElement } from "react";
import MainLayouts from "@/layouts/Main";
import Image from "next/image";
import GlobalButton from "../Common/GlobalButton";
import Example1 from "@/assets/example1.svg";
import Example2 from "@/assets/example2.svg";
import Download from "@/assets/download.svg";

const CardContractStudy: FC = (): ReactElement => {
  const data = [
    {
      label: "Jurusan",
      desc: "Teknik Informatika",
    },
    {
      label: "Semester",
      desc: 1,
    },
    {
      label: "Total SKS",
      desc: 144,
    },
    {
      label: "Kepala Prodi",
      desc: "Rama S.Kom M.Kom",
    },
  ];

  const tabel = [
    {
      no: 1,
      matkul: "Bahasa Inggris",
      img: Example1,
      jmlh_mahasiswa: 15,
      kode_matkul: 12,
      jmlh_sks: 144,
      jmlh_pertemuan: 12,
    },
    {
      no: 2,
      matkul: "Kalkulus",
      img: Example2,
      jmlh_mahasiswa: 21,
      kode_matkul: 18,
      jmlh_sks: 123,
      jmlh_pertemuan: 16,
    },
  ];

  return (
    <MainLayouts>
      <div className="flex  p-8 py-4 w-[100%] justify-between">
        <div className="flex flex-col gap-3 w-[100%]">
          <h1 className="text-2xl py-4 font-semibold">Pengajuan Kartu Rencana Study</h1>
          {/*isi span dari API */}
          {data.map((x, i) => (
            <p key={i} className="flex text-xl justify-between">
              <div className="flex w-full jutify-start">
                <span>{x.label}</span>
              </div>
              <div className="flex w-full justify-start items-start">
                <span> : {x.desc}</span>
              </div>
            </p>
          ))}
        </div>
        <div className="flex justify-end items-end gap-2 ">
          <GlobalButton
            className="text-center ml-80 "
            size="regular"
            color="greenBorder"
            text="Download Silabus"
            hasImg={true}
            icon={Download}
          />
          <GlobalButton
            className="text-center !w-44 !h-14 text-lg py-4 bg-[#3EB449]"
            text="+ Mengajukan"
            hasImg={false}
          />
        </div>
      </div>

      <div className="p-8">
        <table className="min-w-full border border-gray-200  rounded-lg divide-y divide-neutral-400 dark:divide-gray-700">
          <thead className=" bg-gray-100 ">
            <tr>
              <th className="p-3 rounded-md">No.</th>
              <th className="text-start ">Mata Kuliah</th>
              <th className="text-start">Kode Matkul</th>
              <th className="text-start">Jumlah SKS</th>
              <th className="text-start">Jumlah Pertemuan</th>
            </tr>
          </thead>
          {tabel.map((x, i) => (
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
                <td>{x.jmlh_pertemuan} Pertemuan</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </MainLayouts>
  );
};

export default CardContractStudy;
