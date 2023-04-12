import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TAdministrationResponse } from "@/services/Administration/types";
import AdministrationService from "@/services/Administration";

export const useFetchAllAdministration = (): UseQueryResult<TAdministrationResponse, unknown> =>
  useQuery<TAdministrationResponse>({
    queryKey: ["administration-get-all"],
    queryFn: async () => await AdministrationService.GetAdministration(),
  });
