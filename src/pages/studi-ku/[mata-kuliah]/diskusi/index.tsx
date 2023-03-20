import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { diskusiMyStudyBreadCumbs } from "@/utilities/constant";
import { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const DiskusiPage = lazy(() => import("@/modules/MyStudy/Discussion"));

const Diskusi: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error Was Happend</>}>
      <Suspense fallback={<Loading />}>
        <BaseLayouts>
          <BreadCrumb items={diskusiMyStudyBreadCumbs} />
          <DiskusiPage />
        </BaseLayouts>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Diskusi;
