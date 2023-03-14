import { atom } from "recoil";
import { OptionFaculty } from "./type";
// import ImgChoiceFaculty2 from "@/assets/choicefaculty2.svg";
// import ImgChoiceFaculty3 from "@/assets/choicefaculty3.svg";
// import ImgChoiceFaculty4 from "@/assets/choicefaculty4.svg";

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
    // {
    //   src: ImgChoiceFaculty3,
    //   deskripsi: "Japanese Culture",
    //   jumlahstudi: 4,
    //   slug: "/japanese-culture",
    // },
    //   {
    //     src: ImgChoiceFaculty4,
    //     deskripsi: "Design Digitals",
    //     jumlahstudi: 4,
    //     slug: "/design-digital",
    //   },
  ],
});
