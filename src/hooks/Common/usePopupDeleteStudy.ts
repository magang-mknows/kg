import { useRecoilState } from "recoil";
import { PopupModalDeleteStudy } from "@/stores/Common";

type ReturnTypes = {
  setPopupDelete: (val: boolean) => void;
  getPopupDelete: boolean;
};

export const usePopupDeleteStudy = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalDeleteStudy);
  return {
    setPopupDelete: (val: boolean) => set(val),
    getPopupDelete: get,
  };
};
