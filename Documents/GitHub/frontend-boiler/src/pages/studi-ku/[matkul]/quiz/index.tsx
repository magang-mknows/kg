import { FC, ReactElement, lazy } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizHomeSkeleton from "@/components/Loading/Quiz/QuizHomeSkeleton";
import BaseLayouts from "@/layouts/Base";
import BreadCrumb from "@/components/Assigment/BreadCrumb";
import { quizBreadCumbs } from "@/utilities/constant";

const QuizHomeModule = lazy(() => import("@/modules/MyStudy/Quiz/QuizHome"));

const QuizHomePage: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <SuspenseError loadingFallback={<QuizHomeSkeleton />}>
        <BreadCrumb items={quizBreadCumbs} />
        <QuizHomeModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default QuizHomePage;
