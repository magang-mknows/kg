import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import LoadingAdministration from "@/modules/Administration/loading";

const Administration = lazy(() => import("@/modules/Administration"));

const AdministrationPages: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingAdministration />}>
      <Administration />
    </SuspenseError>
  );
};

export default AdministrationPages;
