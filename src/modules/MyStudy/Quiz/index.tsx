import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement, Suspense } from "react";
import QuizHome from "./QuizHome";
import { quizBreadCumbs } from "@/utilities/constant";

const index: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <Suspense fallback={<Loading />}>
        <BreadCrumb items={quizBreadCumbs} />
        <QuizHome />
      </Suspense>
    </BaseLayouts>
  );
};

export default index;
