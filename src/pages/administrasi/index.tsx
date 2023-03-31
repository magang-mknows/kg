import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import AdministrationSkeleton from "@/components/Loading/Administration/AdministrationSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const Administration = lazy(() => import("@/modules/Administration"));

const AdministrationPages: NextPage = (): ReactElement => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an error!
          <button onClick={() => resetErrorBoundary()}>Try again</button>
        </div>
      )}
    >
      <SuspenseError loadingFallback={<AdministrationSkeleton />}>
        <AdministrationSkeleton />
        <Administration />
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default AdministrationPages;
