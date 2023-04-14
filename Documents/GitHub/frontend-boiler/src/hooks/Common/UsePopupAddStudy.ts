import { useRecoilState } from "recoil";
import { PopupModalAddStudy } from "@/stores/Common";

type ReturnTypes = {
  setPopupAdd: (val: boolean) => void;
  getPopupAdd: boolean;
};

export const usePopupAddStudy = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalAddStudy);
  return {
    setPopupAdd: (val: boolean) => set(val),
    getPopupAdd: get,
  };
};
