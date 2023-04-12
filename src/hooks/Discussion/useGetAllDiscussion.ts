import { useQuery, UseQueryResult } from "@tanstack/react-query";
import DiscussionService from "@/services/Discussion";
import { TCreateDiscussionResponse } from "@/services/Discussion/types";

export const useGetAllDiscussion = (): UseQueryResult<TCreateDiscussionResponse> =>
  useQuery<TCreateDiscussionResponse>({
    queryFn: async () => await DiscussionService.GetAllDiscussion(),
  });
