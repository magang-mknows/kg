import BreadCrumb from "@/components/Assigment/BreadCrumb";
import QuizScoreSkeleton from "@/components/Loading/Quiz/QuizScoreSkeleton";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "@/modules/Common/SuspenseError";
import { quizBreadCumbs } from "@/utilities/constant";
import { FC, ReactElement } from "react";
import QuizScoreSection from "@/modules/MyStudy/Quiz/AfterQuiz/QuizScore/QuizScoreSection";
import { ErrorBoundary } from "react-error-boundary";

const newBreadCrumbData = [
  ...quizBreadCumbs,
  {
    name: "Nilai Quiz",
    link: "",
  },
];

const index: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <BaseLayouts widthHScreen={false}>
        <SuspenseError errorFallback={<QuizScoreSkeleton />}>
          <BreadCrumb items={newBreadCrumbData} />
          <QuizScoreSection />
        </SuspenseError>
      </BaseLayouts>
    </ErrorBoundary>
  );
};

export default index;
