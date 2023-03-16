import { FC, ReactElement, useState } from "react";
import Card from "@/components/Common/Card";
import icon1 from "@/assets/semuaFitur/icon1.svg";
import icon2 from "@/assets/semuaFitur/icon2.svg";
import icon3 from "@/assets/semuaFitur/icon3.svg";
import icon4 from "@/assets/semuaFitur/icon4.svg";
import icon5 from "@/assets/semuaFitur/icon5.svg";
import icon6 from "@/assets/semuaFitur/icon6.svg";
import icon7 from "@/assets/semuaFitur/icon7.svg";
import icon8 from "@/assets/semuaFitur/icon8.svg";
import icon9 from "@/assets/semuaFitur/icon9.svg";
import icon10 from "@/assets/semuaFitur/icon10.svg";
import icon11 from "@/assets/semuaFitur/icon11.svg";
import icon12 from "@/assets/semuaFitur/icon12.svg";
import search from "@/assets/semuaFitur/search.svg";
import Image from "next/image";
import { StaticImageData } from "next/image";

const DataFitur: {
  id: number;
  namaFitur: string;
  icon: StaticImageData;
  warna: string;
  slug: string;
}[] = [
  { id: 1, namaFitur: "Administrasi", icon: icon1, warna: "#E9F6FD", slug: "/administrasi" },
  { id: 2, namaFitur: "Rencana Studi", icon: icon2, warna: "#FEF6D0", slug: "/rencana-studi" },
  { id: 3, namaFitur: "Studi Ku", icon: icon1, warna: "#FEDBD7", slug: "/studiku" },
  {
    id: 4,
    namaFitur: "Nilai dan Sertifikat",
    icon: icon3,
    warna: "#E3FBDA",
    slug: "/nilai-sertifikat",
  },
  { id: 5, namaFitur: "Penugasan", icon: icon4, warna: "#FEDBD7", slug: "/penugasan" },
  { id: 6, namaFitur: "Diskusi Global", icon: icon5, warna: "#E3FBDA", slug: "/diskusi-global" },
  {
    id: 7,
    namaFitur: "Konsultasi & Layanan",
    icon: icon2,
    warna: "#FEF6D0",
    slug: "/konsultasi-dan-layanan",
  },
  {
    id: 8,
    namaFitur: "Simulasi, Drill & Assessmen",
    icon: icon6,
    warna: "#E9F6FD",
    slug: "/drill-simulasi",
  },
  { id: 9, namaFitur: "Kalender Saya", icon: icon1, warna: "#E9F6FD", slug: "/kalender-saya" },
  { id: 10, namaFitur: "Papan Skor", icon: icon7, warna: "#FEF6D0", slug: "/papan-skor" },
  { id: 11, namaFitur: "Analitik", icon: icon8, warna: "#FEDBD7", slug: "/analitik" },
  { id: 12, namaFitur: "Panduan", icon: icon9, warna: "#E3FBDA", slug: "/panduan" },
  { id: 13, namaFitur: "Sekilas Ilmu", icon: icon10, warna: "#FEDBD7", slug: "/sekilas-ilmu" },
  { id: 14, namaFitur: "Acara Kampus", icon: icon2, warna: "#E9F6FD", slug: "/acara-kampus" },
  {
    id: 15,
    namaFitur: "Perencanaan Karir",
    icon: icon11,
    warna: "#E3FBDA",
    slug: "/perencanaan-karir",
  },
  {
    id: 16,
    namaFitur: "Penyaluran Kerja",
    icon: icon12,
    warna: "#FEF6D0",
    slug: "/penyaluran-kerja",
  },
];

const Features: FC = (): ReactElement => {
  //ini buat di filter tp masi error jd blm dilanjutin
  const [feature, setFeature] = useState(DataFitur);
  return (
    <>
      <section className="pt-5 px-[72px] bg-white w-full">
        <p className="font-bold text-[28px] text-center">Apa yang ingin kamu pelajari?</p>
        <p className="text-[#A3A3A3] font-semibold text-[16px] text-center">
          Kembangkan keterampilan Kamu dengan kursus dan sertifikasi online di Kampus Gratis.
          Berbagai macam jenis materi tersedia.
        </p>
        <div className="flex bg-[#F5F5F5] my-[36px] rounded-lg py-[16px] px-[26px] w-[1146px]">
          <Image src={search} alt={"tes"} />
          <input
            type="text"
            placeholder="Cari Fitur"
            className="ml-[24px] w-full bg-[#F5F5F5] focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log("berhasil beb");
              }
            }}
          />
        </div>

        <div className="grid grid-cols-12 gap-x-[40px] gap-y-[34px]">
          {feature.map((fitur) => {
            // fitur.filter("Administrasi")
            return (
              <div
                key={fitur.id}
                style={{ background: fitur.warna }}
                className="lg:col-span-3 md:col-span-4 col-span-6 py-[25px] rounded-lg"
              >
                <Card
                  href={fitur.slug}
                  hasImage={true}
                  src={fitur.icon}
                  imgStyle="w-[80px] mx-auto"
                  imgwidth={80}
                >
                  <p className="font-bold mx-auto">{fitur.namaFitur}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
