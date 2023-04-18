import QuizService from "@/services/Quiz";
import { TQuizReviewResponse } from "@/services/Quiz/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetQuizReview = (): UseQueryResult<TQuizReviewResponse, unknown> =>
  useQuery<TQuizReviewResponse>({
    queryKey: ["get-quiz-review"],
    queryFn: async () => await QuizService.GetQuizReview(),
  });
