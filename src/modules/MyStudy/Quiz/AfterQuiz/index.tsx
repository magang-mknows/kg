import BreadCrumb from "@/components/Assigment/BreadCrumb";
import QuizScoreSkeleton from "@/components/Loading/Quiz/QuizScoreSkeleton";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "@/modules/Common/SuspenseError";
import { quizBreadCumbs } from "@/utilities/constant";
import { FC, ReactElement } from "react";
import QuizScore from "./QuizScore";

const newBreadCrumbData = [
  ...quizBreadCumbs,
  {
    name: "Nilai Quiz",
    link: "/studi-ku/course/quiz",
  },
];

const AfterQuiz: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError errorFallback={<QuizScoreSkeleton />}>
        <BreadCrumb items={newBreadCrumbData} />
        {/* <QuizScore /> */}
        <QuizScoreSkeleton />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default AfterQuiz;
