import React, { ReactElement } from "react";
import Image from "next/image";
import search from "@/assets/guide/search.svg";
import { filterOptionDictionary } from "@/stores/GuideDictionary";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import Sidebar from "@/modules/GuideDictionary/sidebar";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import SuspenseError from "@/modules/Common/SuspenseError";
import GuideDicDetail from "@/components/Loading/Guide/GuideDictionaryDetail/GuideDictionaryDetail";

const GuideDictionaryDetail = (): ReactElement => {
  const { query: q } = useRouter();
  const getOption = useRecoilValue(filterOptionDictionary(q.slug as unknown as string));
  const EndpointBreadCrumb = q.slug;

  const BreadCrumbEndpoint = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Panduan",
      link: "/panduan",
    },
    {
      name: "Kamus Kampus Gratis",
      link: "/panduan/kamus-kampus-gratis",
    },
    {
      name: `${EndpointBreadCrumb}`,
      link: `/panduan/kamus-kampus-gratis/${EndpointBreadCrumb}`,
    },
  ];

  return (
    <SuspenseError loadingFallback={<GuideDicDetail />}>
      <BaseLayoutsLanding>
        <BreadCrumb items={BreadCrumbEndpoint} />
        <div className="flex lg:flex-row flex-col-reverse ">
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
            {getOption.map((item, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-[700px] w-full rounded-[8px] flex flex-col place-content-center my-5 shadow-lg dark:bg-[#232529] text-black dark:text-white px-[10px]"
                >
                  <div className="font-bold text-xl my-1">{item.title}</div>
                  <div className="font-medium my-2 text-sm lg:text-base">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </BaseLayoutsLanding>
    </SuspenseError>
  );
};

export default GuideDictionaryDetail;
