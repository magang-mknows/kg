import { quizQuestionState } from "@/stores/MyStudy";
import { Question } from "@/stores/MyStudy/type";
import { useRecoilState } from "recoil";

type QuestionTypes = {
  setData: (val: Array<Question>) => void;
  getData: Array<Question>;
};

export const useQuizQuestion = (): QuestionTypes => {
  const [getQuestion, setQuestion] = useRecoilState(quizQuestionState);
  return {
    setData: (val: Array<Question>) => setQuestion(val),
    getData: getQuestion,
  };
};
