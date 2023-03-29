import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "@/modules/Common/SuspenseError";
import { quizBreadCumbs } from "@/utilities/constant";
import { FC, ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";
import QuizHistorySection from "@/modules/MyStudy/Quiz/AfterQuiz/QuizHistory/QuizHistorySection";
import QuizHistorySkeleton from "@/components/Loading/Quiz/QuizHistorySkeleton";

const newBreadCrumbData = [
  ...quizBreadCumbs,
  {
    name: "Riwayat Quiz",
    link: "",
  },
];

const index: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <BaseLayouts widthHScreen={false}>
        <SuspenseError errorFallback={<QuizHistorySkeleton />}>
          <BreadCrumb items={newBreadCrumbData} />
          <QuizHistorySection />
        </SuspenseError>
      </BaseLayouts>
    </ErrorBoundary>
  );
};

export default index;
