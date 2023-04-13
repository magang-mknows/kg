import { TMetaResponseSingle } from "../types";

export type TCreateQuizPayload = {
  session_id: string;
  duration_sec: number;
  questions_answers: Array<{
    question: string;
    answers: Array<{
      answer: string;
      is_correct: boolean;
    }>;
  }>;
};

type TCreateQuizItem = {
  id: string;
  session_id: string;
  type: string;
  duration_sec: number;
  updated_at: string;
  created_at: string;
};

type TQuizReviewItem = Array<{
  question: string;
  answers: Array<{
    answer: string;
    is_correct: boolean;
    is_selected: boolean;
  }>;
}>;

export type TQuizReviewResponse = TMetaResponseSingle<TQuizReviewItem>;
export type TCreateQuizResponse = TMetaResponseSingle<TCreateQuizItem>;
