export type Data = {
  icon: StaticImageData;
  jumlah: string;
  detail: string;
  warna: string;
};

export type OptionSubject = {
  src: StaticImageData;
  namaDosen: string;
  pertemuan: number;
  kodematkul: number;
  tipematkul: number;
  sks: number;
  slug: string;
};

export type Question = {
  question: string;
  choices: array;
  rightAnswer: string;
};
