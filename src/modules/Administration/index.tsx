import BaseLayouts from "@/layouts/Base";
import React, { FC, lazy, ReactElement, Suspense } from "react";

const PrivateInformation = lazy(() => import("@/modules/Administration/PrivateInformation"));
const JobsInformation = lazy(() => import("@/modules/Administration/JobsInformation"));

const Administration: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"skeleton loading..."}>
        <PrivateInformation />
      </Suspense>
      <Suspense fallback={"skeleton loading..."}>
        <JobsInformation />
      </Suspense>
    </BaseLayouts>
  );
};

export default Administration;
