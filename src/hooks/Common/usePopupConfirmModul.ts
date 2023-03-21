import { useRecoilState } from "recoil";
import { PopupModalSubmissionOpen } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupConfirmModul = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalSubmissionOpen);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
