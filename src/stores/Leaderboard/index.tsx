import { atom, selectorFamily } from "recoil";
import { leaderBoardRankProps } from "./type";
import Avatar from "@/assets/leaderboard/avatar.svg";
import { TLeaderboard } from "@/services/Leaderboard/types";

export const LeaderboardRankState = atom<Array<leaderBoardRankProps>>({
  key: "leaderboard-rank",
  default: [
    {
      id: "1",
      name: "Garnes",
      img: Avatar,
      score: 4900,
    },
    {
      id: "2",
      name: "Alex",
      img: Avatar,
      score: 4100,
    },
    {
      id: "3",
      name: "Adit",
      img: Avatar,
      score: 5000,
    },
    {
      id: "4",
      name: "Garnes",
      img: Avatar,
      score: 4800,
    },
    {
      id: "5",
      name: "Thor",
      img: Avatar,
      score: 5800,
    },
  ],
});
