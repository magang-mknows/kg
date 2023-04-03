import { useQuery, UseQueryResult } from "@tanstack/react-query";
import DiscussionService from "@/services/Discussion";
import { DiscussionResponseTypes } from "@/services/Discussion/types";
import { MetaTypesId } from "@/services/types";

export const useGetDiscussionById = (props: MetaTypesId): UseQueryResult<DiscussionResponseTypes> =>
  useQuery<DiscussionResponseTypes>({
    queryFn: async () => await DiscussionService.GetDiscussion(props),
  });
