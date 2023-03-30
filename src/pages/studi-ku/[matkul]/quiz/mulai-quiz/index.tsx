import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement } from "react";
import { quizBreadCumbs } from "@/utilities/constant";
import QuizStart from "@/modules/MyStudy/Quiz/StartQuiz";
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

  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError>
        <BreadCrumb items={newBreadCrumbData} />
      </SuspenseError>
      <SuspenseError errorFallback={<QuizStartSkeleton />}>
        <QuizStart />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default QuizStartPage;
