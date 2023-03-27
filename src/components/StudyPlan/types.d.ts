import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

export interface AssigmentProps {
  titleAssigment: string;
  category: string;
  date?: string;
  time?: string;
  titleCourse: string;
  bgLine?: string;
  classNameCategory?: string;
  imgAssigment?: StaticImageData;
  alt?: string;
}

export type CrumbItem = {
  link: string;
  name: string;
};

export type BreadCrumbProps = {
  items: CrumbItem[];
};

export type AlertProps = {
  detail?: string;
  color?: string;
};

export type moveProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onMove: MouseEventHandler<HTMLButtonElement>;
};
