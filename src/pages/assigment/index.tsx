import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import Loading from "@/components/Loading";

const AssigmentModules = lazy(() => import("@/modules/Assigment"));

const AssigmentPages: NextPage = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <AssigmentModules />
    </Suspense>
  );
};

export default AssigmentPages;
