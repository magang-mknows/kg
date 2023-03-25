import { useRecoilState } from "recoil";
import { PopupModalCreateDiscussion } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupCreateDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalCreateDiscussion);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
