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
  id: number;
  question: string;
  choices: array<string>;
  rightAnswer: string;
};
