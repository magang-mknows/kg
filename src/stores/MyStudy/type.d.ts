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
  id: number;
  question: string;
  choices: array<string>;
  rightAnswer: string;
};

export type Instruction = {
  matkul: string;
  pertemuan: number;
  dosen: string;
  waktu: string;
  file: string;
  deadline: string;
};

export type Course = {
  conference: number;
  status: {
    [key: string]: "Done" | "In Progress";
  };
  progress: "Done" | "In Progress";
};
