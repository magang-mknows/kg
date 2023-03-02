import React, { FC, ReactElement, useState } from "react";
import Assigment from "@/components/Assigment/AssigmentCard";
import AssigmentAssigned from "@/assets/assigned-assigment.svg";

const ContentSection: FC = (): ReactElement => {
  const [active, setactive] = useState("semua-tugas");
  return (
    <section className="lg:px-20 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md">
      <div className="   bg-white h-full  rounded-[8px]">
        <div className="text-[20px] font-semibold text-center text-[#262626] border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 px-[50px]">
          <ul className="flex flex-wrap ">
            <li className="mr-2">
              <a
                href="#"
                className={`inline-block p-4 ${
                  active == "semua-tugas"
                    ? "text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2"
                    : ""
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  `}
                aria-current="page"
                onClick={() => setactive("semua-tugas")}
              >
                Semua Tugas
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`inline-block p-4 ${
                  active == "ditugaskan"
                    ? "text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2"
                    : ""
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  `}
                aria-current="page"
                onClick={() => setactive("ditugaskan")}
              >
                Ditugaskan
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`inline-block p-4 ${
                  active == "terlambat"
                    ? "text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2"
                    : ""
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  `}
                aria-current="page"
                onClick={() => setactive("terlambat")}
              >
                Terlambat
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`inline-block p-4 ${
                  active == "sedang-dinilai"
                    ? "text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2"
                    : ""
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  `}
                aria-current="page"
                onClick={() => setactive("sedang-dinilai")}
              >
                Sedang Dinilai
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`inline-block p-4 ${
                  active == "selesai"
                    ? "text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2"
                    : ""
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  `}
                aria-current="page"
                onClick={() => setactive("selesai")}
              >
                Selesai
              </a>
            </li>
          </ul>
        </div>

        <Assigment
          titleAssigment={"Tugas Pertemuan 1"}
          category={"DITUGASKAN"}
          titleCourse={"Pekenalan Budaya Jepang"}
          date={"20-09-2021"}
          time={"20:00:00"}
          bgLine={"bg-[#0B568D]"}
          classNameCategory={"text-[#0B568D]"}
          imgAssigment={AssigmentAssigned}
        />
      </div>
    </section>
  );
};

export default ContentSection;
