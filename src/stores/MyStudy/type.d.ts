export type Data = {
  icon: StaticImageData;
  jumlah: string;
  detail: string;
  warna: string;
}

export type Question = {
  id: number;
  question: string;
  choices: array<string>;
  rightAnswer: string;
};
