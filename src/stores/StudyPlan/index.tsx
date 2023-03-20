import { atom, selectorFamily } from "recoil";
import { OptionFaculty, OptionSubject } from "./type";
import ImgChoiceFaculty2 from "@/assets/StudyPlan/choicefaculty2.svg";

export const optionFacultyState = atom<Array<OptionFaculty>>({
  key: "option-faculty-state",
  default: [
    {
      src: ImgChoiceFaculty2,
      deskripsi: "Teknik",
      jumlahstudi: 6,
      slug: "/teknik",
    },
  ],
});

export const optionSubjectState = atom<Array<OptionSubject>>({
  key: "option-subject-state",
  default: [
    {
      src: ImgChoiceFaculty2,
      faculty: "Teknik",
      deskripsi: "Software Engineering",
      jumlahmatkul: 14,
      sks: 131,
      slug: "/software-engineering",
    },
    {
      src: ImgChoiceFaculty2,
      faculty: "Pendidikan",
      deskripsi: "Seni Engineering",
      jumlahmatkul: 14,
      sks: 131,
      slug: "/seni-engineering",
    },
  ],
});

//seacrch
export const queryOptionSubject = atom({
  key: "query-option-subject",
  default: "",
});

export const filterOptionSubject = selectorFamily({
  key: "filter-option-subject",
  get:
    (query: string) =>
    ({ get }) =>
      get(optionSubjectState).filter((item) => item.faculty.toLowerCase().includes(query)),
});
