import { atom } from "recoil";
import { leaderBoardRankProps } from "./type";
import Avatar from "@/assets/leaderboard/avatar.svg";

export const LeaderboardRankState = atom<Array<leaderBoardRankProps>>({
  key: "leaderboard-rank",
  default: [
    {
      name: "Garnes",
      img: Avatar,
      score: 4900,
    },
    {
      name: "Alex",
      img: Avatar,
      score: 4100,
    },
    {
      name: "Adit",
      img: Avatar,
      score: 5000,
    },
    {
      name: "Garnes",
      img: Avatar,
      score: 4800,
    },
    {
      name: "Thor",
      img: Avatar,
      score: 5800,
    },
  ],
});
