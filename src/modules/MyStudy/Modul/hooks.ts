import { confirmModuleState } from "@/modules/MyStudy/Modul/store";
import { useRecoilState } from "recoil";
import { ConfirmModulTypes } from "@/modules/MyStudy/Modul/type";

export const useConfirmModul = (): ConfirmModulTypes => {
  const [getConfirm, setConfirm] = useRecoilState(confirmModuleState);
  return {
    setConfirmModul: (val: boolean) => setConfirm(val),
    getConfirmModul: getConfirm,
  };
};
