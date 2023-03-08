import { useRecoilState } from "recoil";
import { PopupModalScheduleOpen } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupScheduleStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalScheduleOpen);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
