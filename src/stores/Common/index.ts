import { atom } from "recoil";

export const AuthModalOpen = atom({
  key: "modal-auth-open",
  default: false,
});

export const PopupModalOpen = atom({
  key: "modal-popup-open",
  default: false,
});
