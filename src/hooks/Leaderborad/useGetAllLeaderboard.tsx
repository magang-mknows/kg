import LeaderboardService from "@/services/Leaderboard.tsx";
import { TLeaderboardResponse } from "@/services/Leaderboard.tsx/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetAllLeaderboard = (): UseQueryResult<TLeaderboardResponse, unknown> =>
  useQuery<TLeaderboardResponse>({
    queryKey: ["get-all-leaderboard"],
    queryFn: async () => await LeaderboardService.GetAllLeaderboard(),
  });
