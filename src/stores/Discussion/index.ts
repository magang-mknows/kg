import { atom } from "recoil";

export const PopupModalCreateDiscussion = atom({
  key: "modal-popup-create-discussion",
  default: false,
});
export const PopupModalEditDiscussion = atom({
  key: "modal-popup-edit-discussion",
  default: false,
});
export const PopupModalDeleteDiscussion = atom({
  key: "modal-popup-delete-discussion",
  default: false,
});
export const PopupModalReportDiscussion = atom({
  key: "modal-popup-report-discussion",
  default: false,
});
export const PopupModalSuccessDiscussion = atom({
  key: "modal-popup-success-discussion",
  default: false,
});
