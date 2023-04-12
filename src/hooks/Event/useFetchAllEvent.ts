import { useQuery, UseQueryResult } from "@tanstack/react-query";
import EventService from "@/services/Event";
import { TAdministrationResponse } from "@/services/Administration/types";


export const useFetchAllEvent = (): UseQueryResult<TAdministrationResponse> =>
  useQuery<TAdministrationResponse>({
    queryKey: ["fetch-all-event-data"],
    queryFn: async () => await EventService.GetEvent(),
  });
