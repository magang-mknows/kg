import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement } from "react";
import QuizHome from "@/modules/MyStudy/Quiz/QuizHome";
import { tugasBreadCumbs } from "@/utilities/constant";
import SuspenseError from "@/modules/Common/SuspenseError";
import QuizHomeSkeleton from "@/components/Loading/Quiz/QuizHomeSkeleton";

const index: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError loadingFallback={<QuizHomeSkeleton />}>
        <BreadCrumb items={tugasBreadCumbs} />
        <QuizHome />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default index;
