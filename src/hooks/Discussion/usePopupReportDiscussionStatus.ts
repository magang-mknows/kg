import { useRecoilState } from "recoil";
import { PopupModalReportDiscussion } from "@/stores/Common";

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupReportDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalReportDiscussion);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
