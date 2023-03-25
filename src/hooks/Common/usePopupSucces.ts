import { useRecoilState } from "recoil";
import { PopupModalSuccessConversi } from "@/stores/Common";

type ReturnTypes = {
  setPopupSuccess: (val: boolean) => void;
  getPopupSuccess: boolean;
};

export const usePopupSucces = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalSuccessConversi);
  return {
    setPopupSuccess: (val: boolean) => set(val),
    getPopupSuccess: get,
  };
};
