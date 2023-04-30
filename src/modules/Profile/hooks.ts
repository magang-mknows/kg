import { useQuery, UseQueryResult, useMutation, UseMutationResult } from "@tanstack/react-query";
import ProfileService from "@/modules/Profile/service";
import { TProfileResponse, TProfilePayload, TAvatarResponse } from "@/modules/Profile/types";
import { TMetaError } from "@/services/types";

export const useGetUserProfile = (): UseQueryResult<TProfileResponse> =>
  useQuery({
    queryKey: ["get-user-profile"],
    queryFn: async () => await ProfileService.GetUserProfile(),
  });

export const useUpdateUserProfile = (): UseMutationResult<
  TProfileResponse,
  TMetaError,
  TProfilePayload,
  unknown
> => {
  return useMutation({
    mutationKey: ["update-user-profile"],
    mutationFn: async (data) => await ProfileService.UpdateUserProfile(data),
  });
};

// export const useUpdateAvatar = (): UseMutationResult<
//   TAvatarResponse,
//   TMetaError,
//   TProfilePayload,
//   unknown
// > => {
//   return useMutation({
//     mutationKey: ["update-user-profile"],
//     mutationFn: async (data) => await ProfileService.UpdateUserProfile(data),
//   });
// };
