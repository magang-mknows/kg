import { useRecoilState } from "recoil";
import { PopupModalDeleteDiscussion } from "@/stores/Common";

type ReturnTypes = {
  setPopupDeleteStatus: (val: boolean) => void;
  getPopupDeleteStatus: boolean;
};

export const usePopupDeleteDiscussion = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalDeleteDiscussion);
  return {
    setPopupDeleteStatus: (val: boolean) => set(val),
    getPopupDeleteStatus: get,
  };
};
