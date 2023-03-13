import { atom, selector } from "recoil";
import { Progress } from "./type";

export const ProgressState = atom<Array<Progress>>({
  key: "progress-state",
  default: [
    {
        judul: "Introduction to Japanese Culture",
        subjudul: "Japanese Culture",
        semester: 1,
        totalPertemuan: 10,
        pertemuanDone: 8,
    },
    {
        judul: "Introduction to Japanese Culture",
        subjudul: "Japanese Culture",
        semester: 1,
        totalPertemuan: 5,
        pertemuanDone: 5,
    },
    {
        judul: "Introduction to Japanese Culture",
        subjudul: "Japanese Culture",
        semester: 1,
        totalPertemuan: 14,
        pertemuanDone: 5,
    },
    {
        judul: "Introduction to Japanese Culture",
        subjudul: "Japanese Culture",
        semester: 1,
        totalPertemuan: 10,
        pertemuanDone: 9,
    },
  ],
});
