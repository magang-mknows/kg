import { useRecoilState } from "recoil";
import { popupGetUser } from "@/stores/Discussion";
import { TLeaderboardResponse } from "@/services/Leaderboard/types";

type ReturnTypes = {
  setPopupUser: (val: TLeaderboardResponse) => void;
  getPopupUser: TLeaderboardResponse;
};

export const usePopupGetDiscussion = (): ReturnTypes => {
  const [get, set] = useRecoilState(popupGetUser);
  return {
    setPopupUser: (val: TLeaderboardResponse) => set(val),
    getPopupUser: get,
  };
};
