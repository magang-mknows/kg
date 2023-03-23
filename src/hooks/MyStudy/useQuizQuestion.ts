import { quizQuestionState } from "@/stores/MyStudy";
import { Question } from "@/stores/MyStudy/type";
import { useRecoilState } from "recoil";

type QuestionTypes = {
  setQuestionsData: (val: Array<Question>) => void;
  getQuestionsData: Array<Question>;
};

export const useQuizQuestion = (): QuestionTypes => {
  const [getQuestion, setQuestion] = useRecoilState(quizQuestionState);
  return {
    setQuestionsData: (val: Array<Question>) => setQuestion(val),
    getQuestionsData: getQuestion,
  };
};
