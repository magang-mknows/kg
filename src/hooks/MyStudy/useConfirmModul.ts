import { confirmModuleState } from "@/stores/MyStudy";
import { useRecoilState } from "recoil";

type ConfirmModulTypes = {
  setConfirmModul: (val: boolean) => void;
  getConfirmModul: boolean;
};

export const useConfirmModul = (): ConfirmModulTypes => {
  const [getConfirm, setConfirm] = useRecoilState(confirmModuleState);
  return {
    setConfirmModul: (val: boolean) => setConfirm(val),
    getConfirmModul: getConfirm,
  };
};
