import LeaderboardService from "@/services/Leaderboard";
import { TLeaderboardResponse } from "@/services/Leaderboard/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetAllLeaderboard = (): UseQueryResult<TLeaderboardResponse, unknown> =>
  useQuery<TLeaderboardResponse>({
    queryKey: ["get-all-leaderboard"],
    queryFn: async () => await LeaderboardService.GetAllLeaderboard(),
  });
