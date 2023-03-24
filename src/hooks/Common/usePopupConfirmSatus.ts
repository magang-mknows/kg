import { useRecoilState } from "recoil";
import { PopupModalConfirmStatus } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupConfirmStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalConfirmStatus);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
