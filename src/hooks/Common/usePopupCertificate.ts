import { useRecoilState } from "recoil";
import { PopupModalSuccessOpen } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupCertificate = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalSuccessOpen);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
