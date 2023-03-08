import Card from "@/components/Common/Card";
import React, { ReactElement, useState } from "react";
import dummyCertificate from "@/assets/dummy-certificate.svg";
import Filter from "@/assets/filter-icon.svg";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Inflasi Ekonomi",
    role: "webinar",
    type: "Webinar",
  },
  {
    id: 2,
    name: "Introfuction Japanese Culture",
    role: "webinar",
    type: "Webinar",
  },
  {
    id: 3,
    name: "Introfuction Japanese Culture",
    role: "mata-kuliah",
    type: "Mata Kuliah",
  },
  {
    id: 4,
    name: "Introfuction Japanese Culture",
    role: "webinar",
    type: "Webinar",
  },
];

const CertificateSection = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("semua");
  return (
    <div className="w-full">
      <div className="flex justify-end container">
        <button
          className="w-[109px] h-[40px] rounded-[8px] text-center border-[3px] border-[#106FA4]"
          onClick={() => setOpen(open == true ? false : true)}
        >
          <div className="my-auto flex justify-center gap-[10px]">
            <p className="text-[#106FA4] text-[14px]">Filter</p>
            <Image src={Filter} alt={"filter-icon"} />
          </div>
        </button>
      </div>

      {open && (
        <div className="flex justify-end container mt-[10px] z-[9000] absolute ">
          <div className="w-[180px] h-[114px] rounded-[8px] text-center  overflow-hidden shadow-2xl ">
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("semua")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "semua" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden`}
              ></div>
              <p className="text-[#262626] text-[14px] my-auto ml-3">Semua</p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("mata-kuliah")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "mata-kuliah" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden`}
              ></div>
              <p className="text-[#262626] text-[14px] my-auto ml-3">Mata Kuliah</p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("webinar")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "webinar" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden`}
              ></div>
              <p className="text-[#262626] text-[14px] my-auto ml-3">Webinar</p>
            </button>
          </div>
        </div>
      )}

      <div className=" grid grid-cols-12 gap-[36px] relative ">
        {filter == "semua"
          ? data.map((item) => {
              return (
                <div className="col-span-4 w-full h-full " key={item.id}>
                  <Card
                    hasImage={true}
                    src={dummyCertificate}
                    className={"container mx-auto w-full h-full  rounded-[8px] p-[12px] "}
                  >
                    {/* <Card
                hasImage={true}
                src={dummyCertificate}
                className={"container mx-auto w-full h-full"}
              ></Card> */}
                    <div className="w-full mt-[12px]">
                      <h1 className="text-center text-[#171717] text-[18px] font-[500]">
                        {item.name}
                      </h1>
                      <p className="text-center text-[#A3A3A3] text-[16px] font-[500]">
                        {item.type}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })
          : data
              .filter((item) => item.role.includes(filter))
              .map((item) => {
                return (
                  <div className="col-span-4 w-full h-full " key={item.id}>
                    <Card
                      hasImage={true}
                      src={dummyCertificate}
                      className={"container mx-auto w-full h-full  rounded-[8px] p-[12px] "}
                    >
                      <div className="w-full mt-[12px]">
                        <h1 className="text-center text-[#171717] text-[18px] font-[500]">
                          {item.name}
                        </h1>
                        <p className="text-center text-[#A3A3A3] text-[16px] font-[500]">
                          {item.type}
                        </p>
                      </div>
                    </Card>
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default CertificateSection;
