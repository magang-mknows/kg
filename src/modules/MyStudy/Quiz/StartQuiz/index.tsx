import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { quizBreadCumbs } from "@/utilities/constant";

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
      <BreadCrumb items={newBreadCrumbData} />
      <QuizStartModule />
    </BaseLayouts>
  );
};

export default QuizStartPage;
