import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import MyStudySkeleton from "@/components/Loading/MyStudy/MyStudySkeleton";

const MyStudyModules = lazy(() => import("@/modules/MyStudy"));

const MyStudy: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<MyStudySkeleton />}>
      <MyStudyModules />
    </SuspenseError>
  );
};

export default MyStudy;
