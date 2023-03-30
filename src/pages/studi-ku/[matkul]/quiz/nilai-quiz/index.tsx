import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import BaseLayouts from "@/layouts/Base";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { quizBreadCumbs } from "@/utilities/constant";
import QuizScoreSkeleton from "@/components/Loading/Quiz/QuizScoreSkeleton";

const newBreadCrumbData = [
  ...quizBreadCumbs,
  {
    name: "Nilai Quiz",
    link: "",
  },
];

const QuizScoreModule = lazy(() => import("@/modules/MyStudy/Quiz/AfterQuiz/QuizScore"));

const QuizScorePage: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <BreadCrumb items={newBreadCrumbData} />
      <SuspenseError loadingFallback={<QuizScoreSkeleton />}>
        <QuizScoreModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default QuizScorePage;
