import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement, lazy } from "react";
import { tugasBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizHomeSkeleton from "@/components/Loading/Quiz/QuizHomeSkeleton";

const QuizHomeModule = lazy(() => import("@/modules/MyStudy/Quiz/QuizHome"));

const index: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError loadingFallback={<QuizHomeSkeleton />}>
        <BreadCrumb items={tugasBreadCumbs} />
        <QuizHomeModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default index;
