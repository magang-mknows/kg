import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import StatusSkeleton from "@/components/Loading/MyStudy/StatusSkeleton";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "@/modules/Common/SuspenseError";
import { myStudyBreadCumbs } from "@/utilities/constant";
import { FC, ReactElement, Suspense } from "react";
import Status from "./Status";

const index: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <SuspenseError loadingFallback={<StatusSkeleton/>}>
        <BreadCrumb items={myStudyBreadCumbs} />
        <Status />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default index;
