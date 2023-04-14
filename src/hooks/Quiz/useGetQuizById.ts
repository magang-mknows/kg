import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TQuizTakeResponse } from "@/services/Quiz/types";
import QuizService from "@/services/Quiz";

export const useGetQuizById = (id: string): UseQueryResult<TQuizTakeResponse> =>
  useQuery<TQuizTakeResponse>({
    queryKey: ["get-quiz-by-id", id],
    queryFn: async () => await QuizService.GetQuiz(id),
  });
