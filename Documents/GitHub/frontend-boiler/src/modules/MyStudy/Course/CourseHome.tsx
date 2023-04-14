import { FC, ReactElement, useEffect, useMemo, lazy } from "react";
import ContentLayouts from "@/layouts/Content";
import MainLayouts from "@/layouts/Main";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { courseState } from "@/stores/MyStudy/Course";
import imgCourseHome from "@/assets/course/course-home-1.svg";

const AccordionCourse = lazy(() => import("@/components/Course/AccordionCourse"));

let isExecuted = false;

const CourseHome: FC = (): ReactElement => {
  const [courseDatas, setCourseDatas] = useRecoilState(courseState);

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
          <Image
            src={imgCourseHome}
            alt="Course images"
            className="h-full object-cover rounded-lg mx-auto"
          />
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
          <AccordionCourse key={`Accordion-${i}`} conference={conference} index={i} />
        ))}
      </ContentLayouts>
    </MainLayouts>
  );
};

export default CourseHome;
