import { useRecoilState } from "recoil";
import { LeaderboardRankState } from "@/stores/Leaderboard/index";
import { leaderBoardRankProps } from "@/stores/Leaderboard/type";

type leaderBoardRankTypes = {
  setHistorySimulation: (val: Array<leaderBoardRankProps>) => void;
  getHistorySimulation: Array<leaderBoardRankProps>;
};

export const useRankLeaderboard = (): leaderBoardRankTypes => {
  const [get, set] = useRecoilState(LeaderboardRankState);
  return {
    setHistorySimulation: (val: Array<leaderBoardRankProps>) => set(val),
    getHistorySimulation: get,
  };
};
