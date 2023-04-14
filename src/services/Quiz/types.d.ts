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

type TQuizTakeItem = {
  type: string;
  duration: number;
  questions_answers: Array<{
    id: string;
    question: string;
    answers: Array<{
      id: string;
      answer: string;
    }>;
  }>;
};

export type TQuizCreateResponse = TMetaResponseSingle<TQuizCreateItem>;
export type TQuizReviewResponse = TMetaResponseSingle<TQuizReviewItem>;
export type TQuizTakeResponse = TMetaResponseSingle<TQuizTakeItem>;
