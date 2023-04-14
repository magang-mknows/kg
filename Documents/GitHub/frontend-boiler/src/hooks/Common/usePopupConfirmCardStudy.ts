import { useRecoilState } from "recoil";
import { PopupModalConfirmCard } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupConfirmCardStudy = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalConfirmCard);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
