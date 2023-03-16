import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement, Suspense } from "react";
import { quizBreadCumbs } from "@/utilities/constant";
import QuizMain from "./QuizStart";

const index: FC = (): ReactElement => {
  const newBreadCrumbData = [
    ...quizBreadCumbs,
    {
      name: "Mulai Quiz",
      link: "/mystudy/financial-management/quiz/start",
    },
  ];

  return (
    <BaseLayouts widthHScreen={false}>
      <Suspense fallback={<Loading />}>
        <BreadCrumb items={newBreadCrumbData} />
        <QuizMain />
      </Suspense>
    </BaseLayouts>
  );
};

export default index;
