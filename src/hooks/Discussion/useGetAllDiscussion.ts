import { useQuery, UseQueryResult } from "@tanstack/react-query";
import DiscussionService from "@/services/Discussion";
import { TDiscussionResponse } from "@/services/Discussion/types";

export const useGetAllDiscussion = (): UseQueryResult<TDiscussionResponse> =>
  useQuery<TDiscussionResponse>({
    queryKey: ["get-all-leaderboard"],
    queryFn: async () => await DiscussionService.GetAllDiscussion(),
  });
