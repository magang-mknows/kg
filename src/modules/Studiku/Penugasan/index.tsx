import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement, Suspense } from "react";
import Status from "./Status";

const index: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <Suspense fallback={<Loading />}>
        <Status />
      </Suspense>
    </BaseLayouts>
  );
};

export default index;
