import { TMetaResponseSingle } from "../types";

export type TQuizCreatePayload = {
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

type TQuizCreateItem = {
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

export type TQuizCreateResponse = TMetaResponseSingle<TQuizCreateItem>;
export type TQuizReviewResponse = TMetaResponseSingle<TQuizReviewItem>;
