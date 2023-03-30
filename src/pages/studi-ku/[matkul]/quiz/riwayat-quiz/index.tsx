import { FC, ReactElement, lazy } from "react";
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

const QuizHistoryModule = lazy(() => import("@/modules/MyStudy/Quiz/AfterQuiz/QuizHistory"));

const QuizHistoryPage: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <BreadCrumb items={newBreadCrumbData} />
      <SuspenseError loadingFallback={<QuizHistorySkeleton />}>
        <QuizHistoryModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default QuizHistoryPage;
