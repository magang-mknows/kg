import React, { FC, ReactElement, useState } from "react";
import Assigment from "@/components/Assigment/AssigmentCard";
import AssigmentAssigned from "@/assets/assigned-assigment.svg";
import AssigmentDone from "@/assets/assigned-done.svg";
import AssignedAssesment from "@/assets/assigned-assesment.svg";
import AssignedLate from "@/assets/assigned-late.svg";

const ContentSection: FC = (): ReactElement => {
  const [active, setactive] = useState("semua-tugas");

  const dummy = [
    { id: 1, titleAssigment: "test 1", category: "ditugaskan" },
    { id: 2, titleAssigment: "Lalala", category: "terlambat" },
    { id: 3, titleAssigment: "Lilaaa", category: "sedang-dinilai" },
    { id: 4, titleAssigment: "Test", category: "selesai" },
  ];

  return (
    <section className="lg:px-20 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md mb-3">
      <div className="   bg-white h-full  rounded-[8px] ">
        <div className="text-[20px] font-semibold text-center text-[#262626] border-b border-gray-200 hover:text-[#000] px-[50px] mb-10">
          <ul className="flex flex-wrap ">
            <li className="mr-2">
              <button>
                <a
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
              </button>
            </li>
            <li className="mr-2">
              <button>
                <a
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
              </button>
            </li>
            <li className="mr-2">
              <button>
                <a
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
              </button>
            </li>
            <li className="mr-2">
              <button>
                <a
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
              </button>
            </li>
            <li className="mr-2">
              <button>
                <a
                  className={`inline-block p-4 ${
                    active == "selesai"
                      ? "text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2"
                      : ""
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300`}
                  aria-current="page"
                  onClick={() => setactive("selesai")}
                >
                  Selesai
                </a>
              </button>
            </li>
          </ul>
        </div>

        {dummy.map((item) => {
          if (active == "ditugaskan" && item.category == "ditugaskan") {
            return (
              <Assigment
                key={item.id}
                titleAssigment={item.titleAssigment}
                category={item.category}
                titleCourse={"Pekenalan Budaya Jepang"}
                date={"20-09-2021"}
                time={"20:00:00"}
                bgLine={"bg-[#0B568D]"}
                classNameCategory={"text-[#0B568D]"}
                imgAssigment={AssigmentAssigned}
              />
            );
          } else if (active == "terlambat" && item.category == "terlambat") {
            return (
              <Assigment
                key={item.id}
                titleAssigment={item.titleAssigment}
                category={item.category}
                titleCourse={"Pekenalan Budaya Jepang"}
                date={"20-09-2021"}
                time={"20:00:00"}
                bgLine={"bg-[#D79210]"}
                classNameCategory={"text-[#D79210]"}
                imgAssigment={AssignedLate}
              />
            );
          } else if (active == "sedang-dinilai" && item.category == "sedang-dinilai") {
            return (
              <Assigment
                key={item.id}
                titleAssigment={item.titleAssigment}
                category={item.category}
                titleCourse={"Pekenalan Budaya Jepang"}
                date={"20-09-2021"}
                time={"20:00:00"}
                bgLine={"bg-[#737373]"}
                classNameCategory={"text-[#737373]"}
                imgAssigment={AssignedAssesment}
              />
            );
          } else if (active == "selesai" && item.category == "selesai") {
            return (
              <Assigment
                key={item.id}
                titleAssigment={item.titleAssigment}
                category={item.category}
                titleCourse={"Pekenalan Budaya Jepang"}
                date={"20-09-2021"}
                time={"20:00:00"}
                bgLine={"bg-[#2D9A41]"}
                classNameCategory={"text-[#2D9A41]"}
                imgAssigment={AssigmentDone}
              />
            );
          }
          if (active == "semua-tugas") {
            if (item.category == "ditugaskan") {
              return (
                <Assigment
                  key={item.id}
                  titleAssigment={item.titleAssigment}
                  category={item.category}
                  titleCourse={"Pekenalan Budaya Jepang"}
                  date={"20-09-2021"}
                  time={"20:00:00"}
                  bgLine={"bg-[#0B568D]"}
                  classNameCategory={"text-[#0B568D]"}
                  imgAssigment={AssigmentAssigned}
                />
              );
            } else if (item.category == "terlambat") {
              return (
                <Assigment
                  key={item.id}
                  titleAssigment={item.titleAssigment}
                  category={item.category}
                  titleCourse={"Pekenalan Budaya Jepang"}
                  date={"20-09-2021"}
                  time={"20:00:00"}
                  bgLine={"bg-[#D79210]"}
                  classNameCategory={"text-[#D79210]"}
                  imgAssigment={AssignedLate}
                />
              );
            } else if (item.category == "sedang-dinilai") {
              return (
                <Assigment
                  key={item.id}
                  titleAssigment={item.titleAssigment}
                  category={item.category}
                  titleCourse={"Pekenalan Budaya Jepang"}
                  date={"20-09-2021"}
                  time={"20:00:00"}
                  bgLine={"bg-[#737373]"}
                  classNameCategory={"text-[#737373]"}
                  imgAssigment={AssignedAssesment}
                />
              );
            } else if (item.category == "selesai") {
              return (
                <Assigment
                  key={item.id}
                  titleAssigment={item.titleAssigment}
                  category={item.category}
                  titleCourse={"Pekenalan Budaya Jepang"}
                  date={"20-09-2021"}
                  time={"20:00:00"}
                  bgLine={"bg-[#2D9A41]"}
                  classNameCategory={"text-[#2D9A41]"}
                  imgAssigment={AssigmentDone}
                />
              );
            }
          }
        })}
      </div>
    </section>
  );
};

export default ContentSection;
