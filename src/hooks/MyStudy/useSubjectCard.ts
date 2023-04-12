import SubjectService from "@/services/MyStudy/Subject";
import { TSubjectResponse } from "@/services/MyStudy/Subject/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetAllSubject = (): UseQueryResult<TSubjectResponse, unknown> =>
  useQuery<TSubjectResponse>({
    queryKey: ["get-all-subject"],
    queryFn: async () => await SubjectService.GetAllSubject(),
  });