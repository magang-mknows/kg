import { FC, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import BaseLayouts from "@/layouts/Base";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { quizBreadCumbs } from "@/utilities/constant";
import QuizScoreSection from "@/modules/MyStudy/Quiz/AfterQuiz/QuizScore";
import QuizScoreSkeleton from "@/components/Loading/Quiz/QuizScoreSkeleton";

const newBreadCrumbData = [
  ...quizBreadCumbs,
  {
    name: "Nilai Quiz",
    link: "",
  },
];

const QuizScorePage: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <BreadCrumb items={newBreadCrumbData} />
      <SuspenseError loadingFallback={<QuizScoreSkeleton />}>
        <QuizScoreSection />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default QuizScorePage;
