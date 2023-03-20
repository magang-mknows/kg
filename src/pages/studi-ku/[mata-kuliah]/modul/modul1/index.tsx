import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const ModulContent = lazy(() => import("@/modules/MyStudy/Modul/Modul"));

const ModulStudy: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <ModulContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ModulStudy;
