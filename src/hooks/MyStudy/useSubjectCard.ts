import SubjectService from "@/services/MyStudy/Subject";
import { TSubjectResponse } from "@/modules/MyStudy/type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetAllSubject = (): UseQueryResult<TSubjectResponse, unknown> =>
  useQuery<TSubjectResponse>({
    queryKey: ["get-all-subject"],
    queryFn: async () => await SubjectService.GetAllSubject(),
  });
