import { FC, ReactElement } from "react";
import Sidebar from "@/modules/GuideDictionary/sidebar";
import search from "@/assets/guide/search.svg";
import Image from "next/image";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { guideDictionaryDosen } from "@/utilities/constant";
import Card from "@/components/Common/Card";

const KamusDetail: FC = (): ReactElement => {
  return (
    <BaseLayoutsLanding>
      <BreadCrumb items={guideDictionaryDosen} />
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
            title="Dosen"
            titleStyle="font-bold text-[20px]"
          >
            <div className="flex flex-col mt-[12px] gap-4 text-sm">
              <p>
                Tenaga pengajar di perguruan tinggi dengan tugas utama mengajar, membimbing, dan
                atau melatih mahasiswa.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </BaseLayoutsLanding>
  );
};

export default KamusDetail;
