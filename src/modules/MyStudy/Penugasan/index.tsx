import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { quizBreadCumbs } from "@/utilities/constant";
import { FC, ReactElement, Suspense } from "react";
import Status from "./Status";

const index: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <Suspense fallback={<Loading />}>
      <BreadCrumb items={quizBreadCumbs} />
        <Status />
      </Suspense>
    </BaseLayouts>
  );
};

export default index;
