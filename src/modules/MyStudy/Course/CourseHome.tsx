import { FC, ReactElement, useEffect, useMemo, useState } from "react";
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
import { useRecoilState } from "recoil";
import { courseState } from "@/stores/MyStudy/Course";

let isExecuted = false;

const CourseHome: FC = (): ReactElement => {
  const [courseDatas, setCourseDatas] = useRecoilState(courseState);

  const tempIsSelected = courseDatas?.map(() => false);
  const [isSelected, setIsSelected] = useState<boolean[]>(tempIsSelected);

  function showAndHideHandler(index: number): void {
    const temp = [...isSelected];
    temp[index] = !temp[index];
    setIsSelected(temp);
  }

  const updatedCourses = useMemo(() => {
    const changedCourseDatas = courseDatas?.map((course) => {
      const { module, quiz, assignment, disscussion } = course.status;
      const progress = [module, quiz, assignment, disscussion];
      return { ...course, progress };
    });

    for (let i = 0; i < changedCourseDatas.length; i++) {
      if (!changedCourseDatas[i].progress.includes("In Progress")) {
        changedCourseDatas[i + 1].isOpen = true;
      }
    }

    return changedCourseDatas;
  }, [courseDatas]);

  useEffect(() => {
    if (!isExecuted) {
      setCourseDatas(updatedCourses);
    }
    isExecuted = true;
  }, [updatedCourses, setCourseDatas]);

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
          <Image src={imgCourseHome} alt="" className="h-full object-cover rounded-lg mx-auto" />
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
              onClick={() => showAndHideHandler(i)}
              disabled={!conference.isOpen}
              className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white cursor-pointer ${
                conference.isOpen ? "bg-primary-500" : "bg-neutral-500"
              }`}
            >
              <p className="text-lg font-medium">Pertemuan {i + 1}</p>
              {conference.isOpen ? (
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
                    href="/studi-ku/course/modul"
                    className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
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
                    href="/studi-ku/course/quiz"
                    className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
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
                    href="/studi-ku/course/penugasan-test"
                    className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
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
                    href="/studi-ku/course/diskusi"
                    className="text-base text-neutral-800 dark:text-neutral-400 hover:underline"
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
