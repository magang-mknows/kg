import { FC, ReactElement } from "react";
import QuizHistoryModule from "@/modules/MyStudy/Quiz/AfterQuiz/QuizHistory";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizHistorySkeleton from "@/components/Loading/Quiz/QuizHistorySkeleton";
import BaseLayouts from "@/layouts/Base";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { quizBreadCumbs } from "@/utilities/constant";

const newBreadCrumbData = [
  ...quizBreadCumbs,
  {
    name: "Riwayat Quiz",
    link: "",
  },
];

const QuizHistoryPage: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError>
        <BreadCrumb items={newBreadCrumbData} />
      </SuspenseError>
      <SuspenseError loadingFallback={<QuizHistorySkeleton />}>
        <QuizHistoryModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default QuizHistoryPage;
