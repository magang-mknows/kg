import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement, Suspense } from "react";
import QuizHome from "./QuizHome";
import { breadCrumbDummyData } from "./store/dummy-data";

const index: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <Suspense fallback={<Loading />}>
        <BreadCrumb items={breadCrumbDummyData} />
        <QuizHome />
      </Suspense>
    </BaseLayouts>
  );
};

export default index;
