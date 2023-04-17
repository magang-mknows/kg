import { atom, selector } from "recoil";
import { Data, Instruction, OptionSubject } from "./type";
import Icon from "@/assets/myStudy/mahasiswa.svg";
import Icon2 from "@/assets/myStudy/matkul.svg";
import Icon3 from "@/assets/myStudy/sks.svg";
import Icon4 from "@/assets/myStudy/semester.svg";
import ImgChoiceFaculty2 from "@/assets/StudyPlan/choicefaculty2.svg";

export const dataCardState = atom<Array<Data>>({
  key: "option-faculty-state",
  default: [
    { icon: Icon, jumlah: "-", detail: "mahasiswa", warna: "#E9F6FD" },
    { icon: Icon2, jumlah: "-", detail: "matkul", warna: "#E3FBDA" },
    { icon: Icon3, jumlah: "-", detail: "sks", warna: "#FEF6D0" },
    { icon: Icon4, jumlah: "-", detail: "semester", warna: "#E9F6FD" },
  ],
});

export const optionCourseState = atom<Array<OptionSubject>>({
  key: "option-course-state",
  default: [
    {
      src: ImgChoiceFaculty2,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/software-engineering",
    },
  ],
});

export const confirmModuleState = atom({
  key: "confirm-module-state",
  default: false,
});

//seacrch
export const queryOptionCourse = atom({
  key: "query-option-course",
  default: "",
});

export const filterOptionCourse = selector({
  key: "filter-option-course",
  get: ({ get }) =>
    get(optionCourseState).filter((item) =>
      item.namaDosen.toLowerCase().includes(get(queryOptionCourse).toLowerCase()),
    ),
});

//penugasan part 1
export const dataTabelState = atom<Array<Instruction>>({
  key: "instructions-assignment",
  default: [
    {
      matkul: "Accounting 1",
      pertemuan: 1,
      dosen: "Post - Bob S.Kom, M.Kom-Dosen-0001",
      waktu: "23 Febuari 2023, 9:19 AM",
      file: "Tugas1.pdf",
      deadline: "25/02/2023 24:59 WIB",
    },
  ],
});

export const userAnswer = atom({
  key: "userAnswer",
  default: Array,
});
