import { useRecoilState } from "recoil";
import { PopupDeleteStudyPlanState } from "@/stores/Common";

type ReturnTypes = {
  popupDeleteStatus: boolean;
  setPopupDeleteStatus: (val: boolean) => void;
};

export const usePopupDeleteStudyPlan = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupDeleteStudyPlanState);
  return {
    popupDeleteStatus: get,
    setPopupDeleteStatus: (val: boolean) => set(val),
  };
};
