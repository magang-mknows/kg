import { FC, lazy, ReactElement } from "react";
import BaseLayouts from "@/layouts/Base";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { quizBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
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
      <SuspenseError loadingFallback={<QuizScoreSkeleton />}>
        <BreadCrumb items={newBreadCrumbData} />
        <QuizScoreModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default QuizScorePage;
