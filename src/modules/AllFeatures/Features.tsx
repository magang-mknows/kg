import { FC, ReactElement } from "react";
import icon1 from "@/assets/semuaFitur/icon1.svg";
import icon2 from "@/assets/semuaFitur/icon2.svg";
import icon3 from "@/assets/semuaFitur/icon3.svg";
import Image, { StaticImageData } from "next/image";

const DataFitur: { id: number; namaFitur: string; icon: object; warna: string }[] = [
  { id: 1, namaFitur: "Administrasi", icon: {icon1}, warna: "#E9F6FD" },
  { id: 2, namaFitur: "Rencana Studi", icon: {icon2}, warna: "#FEF6D0" },
  { id: 3, namaFitur: "Studi Ku", icon: {icon1}, warna: "#FEDBD7" },
  { id: 4, namaFitur: "Nilai dan Sertifikat", icon: {icon3}, warna: "#E3FBDA" },
  { id: 5, namaFitur: "Penugasan", icon: {}, warna: "#FEDBD7" },
  { id: 6, namaFitur: "Diskusi Global", icon: {}, warna: "#E3FBDA" },
  { id: 7, namaFitur: "Konsultasi & Layanan", icon: {}, warna: "#FEF6D0" },
  { id: 8, namaFitur: "Simulasi, Drill & Assessmen", icon: {}, warna: "#E9F6FD" },
  { id: 9, namaFitur: "Kalender Saya", icon: {}, warna: "#E9F6FD" },
  { id: 10, namaFitur: "Papan Skor", icon: {}, warna: "#FEF6D0" },
  { id: 11, namaFitur: "Analitik", icon: {}, warna: "#FEDBD7" },
  { id: 12, namaFitur: "Panduan", icon: {}, warna: "#E3FBDA" },
  { id: 13, namaFitur: "Sekilas Ilmu", icon: {}, warna: "#FEDBD7" },
  { id: 14, namaFitur: "Acara Kampus", icon: {}, warna: "#E9F6FD" },
  { id: 15, namaFitur: "Perencanaan Karir", icon: {}, warna: "#E3FBDA" },
  { id: 16, namaFitur: "Penyaluran Kerja", icon: {}, warna: "#FEF6D0" },
];

const Features: FC = (): ReactElement => {
  console.log(typeof icon1);
  return (
    <>
      <section className="w-full pt-5 px-[72px]">
        <p className="font-bold text-[28px] text-center">Apa yang ingin kamu pelajari?</p>
        <p className="text-[#A3A3A3] font-semibold text-[16px] text-center">
          Kembangkan keterampilan Kamu dengan kursus dan sertifikasi online di Kampus Gratis.
          Berbagai macam jenis materi tersedia.
        </p>
        <input
          type="text"
          className="bg-[#F5F5F5] my-[36px] rounded-lg py-[16px] px-[26px] w-[1146px]"
          placeholder="Cari Fitur"
        />
        <div className="grid grid-cols-12 gap-x-[40px] gap-y-[34px]">
          {DataFitur.map((fitur) => {
            return (
              <div key={fitur.id} className={`lg:col-span-3 md:col-span-4 col-span-6 bg-[${fitur.warna}] py-[25px] rounded-lg`}>
                <Image className="mx-auto" src={icon1} alt="icon"/>
                <p className="font-bold text-center">{fitur.namaFitur}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
