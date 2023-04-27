import { atom } from "recoil";

export const moduleState = atom({
  key: "module",
  default: false,
});
export const quizState = atom({
  key: "quiz",
  default: false,
});
export const assigmentState = atom({
  key: "tugas",
  default: false,
});
export const discusionState = atom({
  key: "diskusi",
  default: false,
});
