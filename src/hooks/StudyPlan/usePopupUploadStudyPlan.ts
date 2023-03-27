import { useRecoilState } from "recoil";
import { PopupUploadStudyPlanState } from "@/stores/Common";

type ReturnTypes = {
  setPopupUploadStatus: (val: boolean) => void;
  popupUploadStatus: boolean;
};

export const usePopupUploadStudyPlan = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupUploadStudyPlanState);
  return {
    setPopupUploadStatus: (val: boolean) => set(val),
    popupUploadStatus: get,
  };
};
