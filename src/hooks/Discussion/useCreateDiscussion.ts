import DiscussionService from "@/services/Discussion";
import { TCreateDiscussionResponse, TDiscussionPayload } from "@/services/Discussion/types";
import { TMetaError } from "@/services/types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useCreateDiscussion = (): UseMutationResult<
  TCreateDiscussionResponse,
  TMetaError,
  TDiscussionPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ["create-discussion"],
    mutationFn: async (data) => await DiscussionService.CreateDiscussion(data),
  });
};
