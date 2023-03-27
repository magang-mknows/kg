import { useRecoilState } from "recoil";
import { PopupModalEditDiscussion } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupEditDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalEditDiscussion);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
