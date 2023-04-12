import BreadCrumb from "@/components/Assigment/BreadCrumb";
import MyStudySkeleton from "@/components/Loading/MyStudy/MyStudySkeleton";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "@/modules/Common/SuspenseError";
import { myStudyBreadCumbs } from "@/utilities/constant";
import { FC, ReactElement, lazy } from "react";

const MyStudyDashModule = lazy(() => import("@/modules/MyStudy/studiku-dash"));

const MyStudyPage: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <SuspenseError loadingFallback={<MyStudySkeleton />}>
        <BreadCrumb items={myStudyBreadCumbs} />
        <MyStudyDashModule />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default MyStudyPage;
