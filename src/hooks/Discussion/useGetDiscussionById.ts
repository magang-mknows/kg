import { useQuery, UseQueryResult } from "@tanstack/react-query";
import DiscussionService from "@/services/Discussion";
import { TCreateDiscussionResponse } from "@/services/Discussion/types";

export const useGetDiscussionById = (id: number): UseQueryResult<TCreateDiscussionResponse> =>
  useQuery<TCreateDiscussionResponse>({
    queryKey: ["get-detail-discussion", id],
    queryFn: async () => await DiscussionService.GetDiscussion(id),
  });
