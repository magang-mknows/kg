import { TMetaResponseSingle } from "../types";

export type TQuizPayload = {
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

export type TCreateQuizResponse = TMetaResponseSingle<TCreateQuizItem>;
