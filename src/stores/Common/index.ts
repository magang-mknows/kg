import { atom } from "recoil";

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
export const PopupModalConfirmCard = atom({
  key: "modal-popup-confirm",
  default: false,
});

export const PopupModalConfirmModul = atom({
  key: "modal-popup-confirmModul",
  default: false,
});

export const PopupModalConfirmStatus = atom({
  key: "modal-popup-confirmStatus",
  default: false,
});

export const PopupModalSuccessConversi = atom({
  key: "modal-popup-successConversi",
  default: false,
});

export const PopupModalAddStudy = atom({
  key: "modal-popup-addStudy",
  default: false,
});
export const PopupModalDeleteStudy = atom({
  key: "modal-popup-deleteStudy",
  default: false,
});

export const PopupModalCreateDiscussion = atom({
  key: "modal-popup-create-discussion",
  default: false,
});
export const PopupModalEditDiscussion = atom({
  key: "modal-popup-edit-discussion",
  default: false,
});

export const PopupModalDeleteDiscussion = atom({
  key: "modal-popup-delete-Discussion",
  default: false,
});
export const PopupModalReportDiscussion = atom({
  key: "modal-popup-report-Discussion",
  default: false,
});
export const GetFile = atom({
  key: "get-file",
  default: "",
});

export const PopupUploadStudyPlanState = atom({
  key: "modal-popup-upload-StudyPlan",
  default: false,
});

export const PopupSubmissionStudyPlanState = atom({
  key: "modal-popup-submission-StudyPlan",
  default: false,
});

export const PopupDeleteStudyPlanState = atom({
  key: "modal-popup-delete-StudyPlan",
  default: false,
});

export const PopupSuccessStudyPlanState = atom({
  key: "modal-popup-success-StudyPlan",
  default: false,
});
