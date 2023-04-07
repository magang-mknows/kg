import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizStartSkeleton from "@/components/Loading/Quiz/QuizStartSkeleton";

const QuizStartPage: FC = (): ReactElement => {
  const QuizStartModule = lazy(() => import("@/modules/MyStudy/Quiz/StartQuiz"));

  return (
    <SuspenseError loadingFallback={<QuizStartSkeleton />}>
      <QuizStartModule />
    </SuspenseError>
  );
};

export default QuizStartPage;
