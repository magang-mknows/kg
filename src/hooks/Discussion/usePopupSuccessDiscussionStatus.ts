import { useRecoilState } from "recoil";
import { PopupModalSuccessDiscussion } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupSuccessDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalSuccessDiscussion);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
