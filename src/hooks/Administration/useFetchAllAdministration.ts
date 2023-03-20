import { useQuery, UseQueryResult } from "@tanstack/react-query";
import AdministrationService from "@/services/Administration";
import { AdministrationResponseTypes } from "@/services/Administration/types";
import { MetaTypes } from "@/services/types";

export const useFetchAllAdministration = (
  props: MetaTypes,
): UseQueryResult<AdministrationResponseTypes> =>
  useQuery<AdministrationResponseTypes>({
    queryFn: async () => await AdministrationService.GetAdministration(props),
  });
