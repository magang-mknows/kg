import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement, lazy } from "react";
import { tugasBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizHomeSkeleton from "@/components/Loading/Quiz/QuizHomeSkeleton";

const QuizHome = lazy(() => import("@/modules/MyStudy/Quiz/QuizHome"));

const QuizHomeModule: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <BreadCrumb items={tugasBreadCumbs} />
      <QuizHome />
    </BaseLayouts>
  );
};

export default QuizHomeModule;
