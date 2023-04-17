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

export type TQuizTakeResponse = TMetaResponseSingle<TQuizTakeItem>;

export type QuestionTypes = {
  setQuestionsData: (val: Array<Question>) => void;
  getQuestionsData: Array<Question>;
};

export type DataTypes = {
  setCurrNumber: (val: number) => void;
  getCurrNumber: number;
};
