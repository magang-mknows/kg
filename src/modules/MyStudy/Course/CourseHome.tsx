import { FC, ReactElement, useCallback, useEffect, useState } from "react";
import ContentLayouts from "@/layouts/Content";
import MainLayouts from "@/layouts/Main";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

import imgCourseHome from "@/assets/course/course-home-1.svg";
import imgModuleIcon from "@/assets/course/module-icon.svg";
import imgQuizIcon from "@/assets/course/quiz-icon.svg";
import imgAssignmentIcon from "@/assets/course/assignment-icon.svg";
import imgDiscussionIcon from "@/assets/course/discussion-icon.svg";
import imgDoneIcon from "@/assets/course/done-icon.svg";
import imgLockIcon from "@/assets/course/lock-icon.svg";
import Link from "next/link";
import { Course } from "@/stores/MyStudy/type";

const courseDatas: Array<Course> = [
  {
    conference: 1,
    status: {
      module: "Done",
      quiz: "Done",
      assignment: "Done",
      disscussion: "In Progress",
    },
    progress: "Done",
  },
  {
    conference: 2,
    status: {
      module: "In Progress",
      quiz: "In Progress",
      assignment: "In Progress",
      disscussion: "In Progress",
    },
    progress: "In Progress",
  },
  {
    conference: 3,
    status: {
      module: "In Progress",
      quiz: "In Progress",
      assignment: "In Progress",
      disscussion: "In Progress",
    },
    progress: "In Progress",
  },
];

const CourseHome: FC = (): ReactElement => {
  const tempArray = courseDatas?.map(() => false);
  const [isSelected, setIsSelected] = useState<boolean[]>(tempArray);

  function clickHandler(index: number): void {
    const temp = [...isSelected];
    temp[index] = !temp[index];
    setIsSelected(temp);
  }

  const progressConferenceHandler = useCallback((): void => {
    const temp: Array<string[]> = [];

    for (let i = 0; i < courseDatas.length; i++) {
      const statusProperty = Object.keys(courseDatas[i].status) as Array<keyof Course["status"]>;
      temp.push([]);
      for (let j = 0; j < statusProperty.length; j++) {
        temp[j]?.push(courseDatas[i].status[statusProperty[j]]);
      }
      const arrayOftemp = temp[i].every((item) => item === "Done");
      if (arrayOftemp) {
        courseDatas[i].progress = "Done";
      } else if (!arrayOftemp) {
        courseDatas[i].progress = "In Progress";
      }
    }
  }, []);

  useEffect(() => {
    progressConferenceHandler();
  }, [progressConferenceHandler]);

  return (
    <MainLayouts
      withHScreen={false}
      withPadding={false}
      className="mx-auto px-[7%] my-8 flex flex-col gap-y-10"
    >
      <ContentLayouts withGap={false} className="gap-y-[30px] items-center">
        <h3 className="text-black dark:text-white text-[28px] text-center font-bold">
          Manajemen Keuangan
        </h3>
        <div className="w-[95%] h-[253px]">
          <Image src={imgCourseHome} alt="" className="h-full object-cover rounded-lg" />
        </div>
        <p className="text-sm font-normal text-neutral-800 dark:text-neutral-400 text-justify">
          Manajemen Keuangan belajar tentang bagaimana merencanakan, mengelola, serta menggunakan
          sumber daya keuangan perusahaan. Perkuliahan jurusan ini juga tentang lembaga perbankan,
          kinerja perusahaan, perpajakan, akuntansi, perdagangan internasional, perencanaan modal,
          asuransi, anggaran, analisis keuangan, akuisisi dana, manajemen utang dan aset, hingga
          portofolio dan manajemen investasi. Pengawasan berbagai aspek keuangan guna mencegah
          kesalahan atau kecurangan juga dipelajari selama kuliah.
        </p>
      </ContentLayouts>

      <ContentLayouts withGap={false} className="gap-[30px] select-none">
        {courseDatas.map((conference, i) => (
          <div key={i} className="flex flex-col">
            <button
              onClick={() => clickHandler(i)}
              disabled={courseDatas[i].progress === "In Progress"}
              className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white cursor-pointer ${
                courseDatas[i].progress === "Done" ? "bg-primary-500" : "bg-neutral-500"
              }`}
            >
              <p className="text-lg font-medium">Pertemuan {i + 1}</p>
              {courseDatas[i].progress === "Done" ? (
                <MdArrowDropDown
                  className={`text-3xl relative ${isSelected[i] ? "rotate-180" : ""}`}
                />
              ) : (
                <Image
                  src={imgLockIcon}
                  alt=""
                  className={`relative ${isSelected[i] ? "rotate-180" : ""}`}
                />
              )}
            </button>

            <div className={`w-[94%] mx-auto ${isSelected[i] ? "visible" : "hidden"}`}>
              <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
                <div className="flex gap-x-6">
                  <Image src={imgModuleIcon} alt="" />
                  <Link
                    href="/studi-ku/menejemen-keuangan/modul"
                    className="text-base text-neutral-800 dark:text-neutral-400"
                  >
                    Modul
                  </Link>
                </div>
                <div className="">
                  {conference.status.module === "Done" && <Image src={imgDoneIcon} alt="" />}
                </div>
              </div>
              <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
                <div className="flex gap-x-6">
                  <Image src={imgQuizIcon} alt="" />
                  <Link
                    href="/studi-ku/menejemen-keuangan/quiz"
                    className="text-base text-neutral-800 dark:text-neutral-400"
                  >
                    Quiz
                  </Link>
                </div>
                <div className="">
                  {conference.status.quiz === "Done" && <Image src={imgDoneIcon} alt="" />}
                </div>
              </div>
              <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
                <div className="flex gap-x-6">
                  <Image src={imgAssignmentIcon} alt="" />
                  <Link
                    href="/studi-ku/menejemen-keuangan/tugas"
                    className="text-base text-neutral-800 dark:text-neutral-400"
                  >
                    Tugas
                  </Link>
                </div>
                <div className="">
                  {conference.status.assignment === "Done" && <Image src={imgDoneIcon} alt="" />}
                </div>
              </div>
              <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
                <div className="flex gap-x-6">
                  <Image src={imgDiscussionIcon} alt="" />
                  <Link
                    href="/studi-ku/menejemen-keuangan/diskusi"
                    className="text-base text-neutral-800 dark:text-neutral-400"
                  >
                    Diskusi
                  </Link>
                </div>
                <div className="">
                  {conference.status.disscussion === "Done" && <Image src={imgDoneIcon} alt="" />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ContentLayouts>
    </MainLayouts>
  );
};

export default CourseHome;
