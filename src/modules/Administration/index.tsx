import BaseLayouts from "@/layouts/Base";
import React, { lazy, Suspense } from "react";

const PrivateInformation = lazy(() => import("@/modules/Administration/PrivateInformation"));
const JobsInformation = lazy(() => import("@/modules/Administration/JobsInformation"));

const index = () => {
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

export default index;
