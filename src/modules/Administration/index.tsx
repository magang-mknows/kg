import BaseLayouts from "@/layouts/Base";
import React, { FC, lazy, ReactElement, Suspense } from "react";

const ContentAdministration = lazy(() => import("@/modules/Administration/ContentAdministration"));

const Administration: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"skeleton loading..."}>
        <ContentAdministration />
      </Suspense>
    </BaseLayouts>
  );
};

export default Administration;
