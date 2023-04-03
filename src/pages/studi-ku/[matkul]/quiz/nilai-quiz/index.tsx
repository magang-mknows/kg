import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizScoreSkeleton from "@/components/Loading/Quiz/QuizScoreSkeleton";

const QuizScoreModule = lazy(() => import("@/modules/MyStudy/Quiz/AfterQuiz/QuizScore"));

const QuizScorePage: FC = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<QuizScoreSkeleton />}>
      <QuizScoreModule />
    </SuspenseError>
  );
};

export default QuizScorePage;
