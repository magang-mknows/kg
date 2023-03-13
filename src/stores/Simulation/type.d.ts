import { StaticImageData } from "next/image";

export type T = {
    schedule: number;
    src: StaticImageData;
    dosen: string;
    category: string;
    title: string;
    slug: string
  }

export type HistorySimulation ={
  src: StaticImageData,
  title: string,
  dosen: string,
  date: string,
  time: string
  status: string,
  slug: string
}