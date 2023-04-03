import { FC, ReactElement, lazy } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizHomeSkeleton from "@/components/Loading/Quiz/QuizHomeSkeleton";

const QuizHomeModule = lazy(() => import("@/modules/MyStudy/Quiz/QuizHome"));

const QuizHomePage: FC = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<QuizHomeSkeleton />}>
      <QuizHomeModule />
    </SuspenseError>
  );
};

export default QuizHomePage;
