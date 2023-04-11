// import { useQuery, UseQueryResult } from "@tanstack/react-query";
// import EventService from "@/services/Event";
// import { AdministrationResponseTypes } from "@/services/Administration/types";
// import { MetaTypes } from "@/services/types";

// export const useFetchAllEvent = (props: MetaTypes): UseQueryResult<AdministrationResponseTypes> =>
//   useQuery<AdministrationResponseTypes>({
//     queryKey: ["fetch-all-event-data", props],
//     queryFn: async () => await EventService.GetEvent(props),
//   });

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import EventService from "@/services/Event";
import { AdministrationResponseTypes } from "@/services/Administration/types";
import { MetaTypes } from "@/services/types";

export const useFetchAllEvent = (): UseQueryResult<AdministrationResponseTypes> =>
  useQuery<AdministrationResponseTypes>({
    queryKey: ["fetch-all-event-data"],
    queryFn: async () => await EventService.GetEvent(),
  });

