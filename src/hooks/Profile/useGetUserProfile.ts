import { useQuery, UseQueryResult } from "@tanstack/react-query";
import ProfileService from "@/services/Profile";
import { TProfileResponse } from "@/services/Profile/types";

export const useGetUserProfile = (): UseQueryResult<TProfileResponse> =>
  useQuery({
    queryKey: ["get-user-profile"],
    queryFn: async () => await ProfileService.GetUserProfile(),
  });
