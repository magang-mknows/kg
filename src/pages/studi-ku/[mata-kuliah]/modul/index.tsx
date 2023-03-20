import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const ModulStudyContent = lazy(() => import("@/modules/MyStudy/Modul"));

const ModulStudy: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <ModulStudyContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ModulStudy;
