import { Progress } from "@/modules/Dashboard/Content/type";
import { atom } from "recoil";

const now = new Date();

export const selectedEvent = atom({
  key: "selectedEvent",
  default: 1,
});

export const selectedTasks = atom({
  key: "selectedTasks",
  default: 1,
});

export const selectedDate = atom({
  key: "selectedDate",
  default: now,
});

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

export const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const progressSectionDummyData: {
  id: number;
  judul: string;
  subjudul: string;
  semester: number;
  totalPertemuan: number;
  pertemuanDone: number;
}[] = [
  {
    id: 1,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 10,
    pertemuanDone: 8,
  },
  {
    id: 2,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 5,
    pertemuanDone: 5,
  },
  {
    id: 3,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 10,
    pertemuanDone: 9,
  },
  {
    id: 4,
    judul: "Introduction to Japanese Culture",
    subjudul: "Japanese Culture",
    semester: 1,
    totalPertemuan: 14,
    pertemuanDone: 5,
  },
];
