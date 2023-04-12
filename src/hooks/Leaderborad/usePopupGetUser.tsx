import { useRecoilState } from "recoil";
import { popupGetUser } from "@/stores/Leaderboard";
// import { leaderBoardRankProps } from "@/stores/Leaderboard/type";
import { TLeaderboardResponse } from "@/services/Leaderboard/types";

type ReturnTypes = {
  setPopupUser: (val: TLeaderboardResponse) => void;
  getPopupUser: TLeaderboardResponse;
};

export const usePopupGetUser = (): ReturnTypes => {
  const [get, set] = useRecoilState(popupGetUser);
  return {
    setPopupUser: (val: TLeaderboardResponse) => set(val),
    getPopupUser: get,
  };
};
