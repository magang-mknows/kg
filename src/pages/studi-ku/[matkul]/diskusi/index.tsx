import BreadCrumb from "@/components/Assigment/BreadCrumb";
import DiscussionSkeleton from "@/components/Loading/MyStudy/Discussion/DiscussionSkeleton";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "@/modules/Common/SuspenseError";
import { diskusiMyStudyBreadCumbs } from "@/utilities/constant";
import { NextPage } from "next";
import { lazy, ReactElement } from "react";

const DiskusiPage = lazy(() => import("@/modules/MyStudy/Discussion"));

const Diskusi: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<DiscussionSkeleton />}>
      <BaseLayouts>
        <BreadCrumb items={diskusiMyStudyBreadCumbs} />
        <DiskusiPage />
      </BaseLayouts>
    </SuspenseError>
  );
};
export default Diskusi;
