import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement, Suspense } from "react";
import { quizBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizStartSkeleton from "@/components/Loading/Quiz/QuizStartSkeleton";
import { ErrorBoundary } from "react-error-boundary";

const QuizStartPage: FC = (): ReactElement => {
  const newBreadCrumbData = [
    ...quizBreadCumbs,
    {
      name: "Mulai Quiz",
      link: "",
    },
  ];

  const QuizStartModule = lazy(() => import("@/modules/MyStudy/Quiz/StartQuiz"));

  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError>
        <BreadCrumb items={newBreadCrumbData} />
      </SuspenseError>
      <Suspense fallback={<QuizStartSkeleton />}>
        <ErrorBoundary fallback={<span className="text-red-600">Error was Happen</span>}>
          <QuizStartModule />
        </ErrorBoundary>
      </Suspense>
    </BaseLayouts>
  );
};

export default QuizStartPage;
