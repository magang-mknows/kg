import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { quizBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizStartSkeleton from "@/components/Loading/Quiz/QuizStartSkeleton";

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
      <SuspenseError errorFallback={<QuizStartSkeleton />}>
        <QuizStartModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default QuizStartPage;
