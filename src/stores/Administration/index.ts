import { atom } from "recoil";

export const PrivateInformationState = atom({
  key: "private-information-state",
  default: false,
});

export const JobInformationState = atom({
  key: "job-information-state",
  default: false,
});