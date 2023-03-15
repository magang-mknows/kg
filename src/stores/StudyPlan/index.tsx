import { atom, selector } from "recoil";
import { OptionFaculty, OptionSubject } from "./type";
// import ImgChoiceFaculty2 from "@/assets/StudyPlan/choicefaculty2.svg";

export const optionFacultyState = atom<Array<OptionFaculty>>({
  key: "option-faculty-state",
  default: [
    // dummyData
    // {
    //   src: ImgChoiceFaculty2,
    //   deskripsi: "Pembiayaan dan Optimalisasi Bisnis",
    //   jumlahstudi: 6,
    //   slug: "/pembiayaan-optimasi-bisnis",
    // },
  ],
});

export const optionSubjectState = atom<Array<OptionSubject>>({
  key: "option-subject-state",
  default: [
    // {
    //   src: ImgChoiceFaculty2,
    //   deskripsi: "Software Engineering",
    //   jumlahmatkul: 14,
    //   sks: 131,
    //   slug: "/software-engineering",
    // },
  ],
});

//seacrch
export const queryOptionSubject = atom({
  key: "query-option-subject",
  default: "",
});

export const filterOptionSubject = selector({
  key: "filter-option-subject",
  get: ({ get }) =>
    get(optionSubjectState).filter((item) =>
      item.deskripsi.toLowerCase().includes(get(queryOptionSubject).toLowerCase()),
    ),
});
