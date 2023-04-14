import { useRecoilState } from "recoil";
import { popupGetUser } from "@/stores/Leaderboard";
// import { leaderBoardRankProps } from "@/stores/Leaderboard/type";
// import { TLeaderboardResponse } from "@/services/Leaderboard/types";

import { TLeaderboard } from "@/services/Leaderboard/types";
type ReturnTypes = {
  setPopupUser: (val: TLeaderboard) => void;
  getPopupUser: TLeaderboard;
};

export const usePopupGetUser = (): ReturnTypes => {
  const [get, set] = useRecoilState(popupGetUser);
  return {
    setPopupUser: (val: TLeaderboard) => set(val),
    getPopupUser: get,
  };
};
