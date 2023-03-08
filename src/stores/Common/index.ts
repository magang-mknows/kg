import { atom } from "recoil";

export const AuthModalOpen = atom({
  key: "modal-auth-open",
  default: false,
});

export const PopupModalSuccessOpen = atom({
  key: "modal-popup-success",
  default: false,
});
export const PopupModalScheduleOpen = atom({
  key: "modal-popup-schedule",
  default: false,
});
export const PopupModalSubmissionOpen = atom({
  key: "modal-popup-submission",
  default: false,
});
