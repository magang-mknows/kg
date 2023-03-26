import { useRecoilState } from "recoil";
import { PopupSubmissionStudyPlanState } from "@/stores/Common";

type ReturnTypes = {
  popupSubmissionStatus: boolean;
  setPopupSubmissionStatus: (val: boolean) => void;
};

export const usePopupSubmissionStudyPlan = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupSubmissionStudyPlanState);
  return {
    popupSubmissionStatus: get,
    setPopupSubmissionStatus: (val: boolean) => set(val),
  };
};
