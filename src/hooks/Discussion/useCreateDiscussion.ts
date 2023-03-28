import DiscussionService, { DiscussionPayloadTypes } from "@/services/Discussion";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useCreateDiscussion = (): UseMutationResult<
  unknown,
  unknown,
  DiscussionPayloadTypes,
  unknown
> => {
  return useMutation({
    mutationKey: ["create-discussion"],
    mutationFn: async (data: DiscussionPayloadTypes) =>
      await DiscussionService.CreateDiscussion(data),
  });
};
