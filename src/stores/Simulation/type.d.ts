import { StaticImageData } from "next/image";

export type T = {
    schedule: number;
    src: StaticImageData;
    dosen: string;
    category: string;
    title: string;
    slug?: string
    location?: string;
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

export type RescheduleSimulation={
  date: string,
  time: Array<Time>
}

export type Time={
  time: string,
}