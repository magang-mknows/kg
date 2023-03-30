import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement } from "react";
import { quizBreadCumbs } from "@/utilities/constant";
import QuizMain from "./QuizStart";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizStartSkeleton from "@/components/Loading/Quiz/QuizStartSkeleton";

const StartQuiz: FC = (): ReactElement => {
  const newBreadCrumbData = [
    ...quizBreadCumbs,
    {
      name: "Mulai Quiz",
      link: "/studi-ku/course/quiz",
    },
  ];

  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError errorFallback={<QuizStartSkeleton />}>
        <BreadCrumb items={newBreadCrumbData} />
        <QuizMain />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default StartQuiz;
