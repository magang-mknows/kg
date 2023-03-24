import { useRecoilState } from "recoil";
import { PopupModalConfirmModul } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupConfirmModul = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalConfirmModul);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
