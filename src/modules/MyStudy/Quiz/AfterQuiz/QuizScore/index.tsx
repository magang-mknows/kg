import { FC, lazy, ReactElement } from "react";
import BaseLayouts from "@/layouts/Base";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { quizBreadCumbs } from "@/utilities/constant";

const newBreadCrumbData = [
  ...quizBreadCumbs,
  {
    name: "Nilai Quiz",
    link: "",
  },
];

const QuizScore = lazy(() => import("@/modules/MyStudy/Quiz/AfterQuiz/QuizScore/QuiScore"));

const QuizScoreModule: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <BreadCrumb items={newBreadCrumbData} />
      <QuizScore />
    </BaseLayouts>
  );
};

export default QuizScoreModule;
