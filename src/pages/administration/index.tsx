import type { NextPage } from "next";
import { ReactElement, Suspense } from "react";
import Administration from "@/modules/Administration";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import Loading from "@/components/Loading";

const Index: NextPage = (): ReactElement => {
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
      <Suspense fallback={<Loading />}>
        <Administration />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Index;
