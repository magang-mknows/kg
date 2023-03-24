import { useRecoilState } from "recoil";
import { PopupModalDeleteDiscussion } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupDeleteDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalDeleteDiscussion);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
