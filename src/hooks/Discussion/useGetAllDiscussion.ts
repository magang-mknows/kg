// import { useQuery, UseQueryResult } from "@tanstack/react-query";
// import DiscussionService from "@/services/Discussion";
// import { DiscussionResponseTypes } from "@/services/Discussion/types";
// import { MetaTypes } from "@/services/types";

// export const useGetAllDiscussion = (
//   props: MetaTypes,
// ): UseQueryResult<DiscussionResponseTypes> =>
//   useQuery<DiscussionResponseTypes>({
//     queryFn: async () => await DiscussionService.GetAllDiscussion(props),
//   });

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import DiscussionService from "@/services/Discussion";
import { DiscussionResponseTypes } from "@/services/Discussion/types";
// import { MetaTypes } from "@/services/types";

export const useGetAllDiscussion = (

): UseQueryResult<DiscussionResponseTypes> =>
  useQuery<DiscussionResponseTypes>({
    queryFn: async () => await DiscussionService.GetAllDiscussion(),
  });

