import { useQuery, UseQueryResult } from "@tanstack/react-query";
import ProfileService from "@/modules/Profile/service";
import { TProfileResponse } from "@/modules/Profile/types";

export const useGetUserProfile = (): UseQueryResult<TProfileResponse> =>
  useQuery({
    queryKey: ["get-user-profile"],
    queryFn: async () => await ProfileService.GetUserProfile(),
  });
