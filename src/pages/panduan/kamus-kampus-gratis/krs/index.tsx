import { FC, ReactElement } from "react";
import Sidebar from "@/modules/GuideDictionary/sidebar";
import search from "@/assets/guide/search.svg";
import Image from "next/image";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { guideDictionaryKrs } from "@/utilities/constant";
import Card from "@/components/Common/Card";

const KamusDetail: FC = (): ReactElement => {
  return (
    <BaseLayoutsLanding>
      <BreadCrumb items={guideDictionaryKrs} />
      <div className="flex flex-col-reverse lg:flex-row">
        <Sidebar />
        <div className="flex flex-col px-6 md:px-8 lg:px10 mt-[30px] mb-[50px]">
          <div className="col-span-1 ">
            <div className="title">
              <h1 className=" text-[50px] font-[700]">Kamus Kampus Gratis </h1>
              <p className="text-[14px] font-[400] text-[#737373] dark:text-white">
                Berupa video tutorial penggunaan dan fungsi fitur yang ada di Website KG
              </p>
            </div>
            <div className="seacrh lg:w-[700px] h-[56px] w-full bg-neautral-100 dark:bg-[#232529] rounded-[8px] my-5 flex items-center gap-4  ">
              <Image src={search} alt={"search"} className={"ml-[24px]"} />
              <input
                type="text"
                name=""
                id=""
                placeholder="Cari informasi"
                className=" bg-transparent w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="grid col-span-1 my-2 "></div>
          <Card
            hasImage={false}
            className="lg:w-[700px] shadow-lg dark:!bg-[#232529] rounded-[8px]"
            title="KRS"
            titleStyle="font-bold text-[20px]"
          >
            <div className="flex flex-col mt-[12px] gap-4 text-sm">
              <p>
                Bagi beberapa maba, istilah yang satu ini akan terdengar asing karena saat duduk di
                bangku sekolah menengah atau akhir, sistem KRS belum diterapkan sehingga ketika
                masuk lingkungan kuliah, kamu belum mengerti tentang sistem ini. Lalu, apa sih KRS
                itu?
              </p>
              <p>
                KRS adalah sebuah kartu yang biasanya kamu dapatkan ketika mengikuti kuliah pertama
                di awal semester. Tujuannya sebagai rencana pengambilan mata kuliah berdasarkan
                jurusan yang telah kamu ambil. Di dalam KRS, terdapat data yang perlu kamu isi,
                seperti nama mahasiswa, nomor induk mahasiswa, fakultas, semester saat ini, foto
                mahasiswa, jurusan, cap universitas, tanda tangan birokrasi atau dosen wali, dan
                tanda tangan kamu sendiri. Kalau kamu gak isi KRS, data kamu gak akan masuk database
                di kampus sehingga kamu akan dianggap cuti. Dampaknya? Kamu jadi gak bisa mengikuti
                kegiatan perkuliahan dan terancam terlambat lulus.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </BaseLayoutsLanding>
  );
};

export default KamusDetail;
