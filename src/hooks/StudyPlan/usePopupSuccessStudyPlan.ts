import { useRecoilState } from "recoil";
import { PopupSuccessStudyPlanState } from "@/stores/Common";

type ReturnTypes = {
  popupSuccessStatus: boolean;
  setPopupSuccessStatus: (val: boolean) => void;
};

export const usePopupSuccessStudyPlan = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupSuccessStudyPlanState);
  return {
    popupSuccessStatus: get,
    setPopupSuccessStatus: (val: boolean) => set(val),
  };
};
