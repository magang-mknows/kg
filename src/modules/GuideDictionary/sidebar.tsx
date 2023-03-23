import React, { ReactElement } from "react";
import Card from "@/components/Common/Card";

const Sidebar = (): ReactElement => {
  const dataDummy = [
    {
      title: "KRS",
      description:
        "SKS adalah singkatan dari satuan kredit semester. Sistem SKS ini digunakan umumnya di perguruan tinggi.",
      link: "/panduan/kamus-kampus-gratis/krs",
    },
    {
      title: "SKS",
      description:
        "Nilai keseluruhan mahasiswa dari beban studi yang ia ambil. IPK digunakan sebagai predikat kelulusan mahasiswa.",
      link: "/panduan/kamus-kampus-gratis/sks",
    },
    {
      title: "IPK",
      description:
        "Merupakan kumpulan definisi singkat dari istilah dan akronim yang digunakan di Mobile Aplikasi Kampus Gratis.",
      link: "/panduan/kamus-kampus-gratis/ipk",
    },
    {
      title: "Program Studi",
      description:
        "Kesatuan rencana belajar sebagai pedoman penyelenggaraan pendidikan akademik dan atau profesional atas dasar suatu kurikulum.",
      link: "/panduan/kamus-kampus-gratis/program-studi",
    },
    {
      title: "IP",
      description:
        "Adalah singkatan dari “Indeks Prestasi,” yang artinya sama aja kayak nilai akhir semester.",
      link: "/panduan/kamus-kampus-gratis/ip",
    },
    {
      title: "Dosen",
      description:
        "Tenaga pengajar di perguruan tinggi dengan tugas utama mengajar, membimbing, dan atau melatih mahasiswa.",
      link: "/panduan/kamus-kampus-gratis/dosen",
    },
  ];
  return (
    <div className="px-6 md:px-8 lg:px10 mb-10">
      <h1 className=" text-[20px] font-[700] mb-2">Kamus Populer </h1>
      <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-2 lg:gap-0 md:gap-4">
        {dataDummy.map((dummy, i) => {
          return (
            <Card
              key={i}
              href={dummy.link}
              hasImage={false}
              title={dummy.title}
              titleStyle="font-bold text-[16px]"
              className="bg-[#F5F5F5] dark:bg-[#232529] rounded-lg max-w-xs my-2 min-h-[90%] "
            >
              <p className="text-[12px] font-normal ">{dummy.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
