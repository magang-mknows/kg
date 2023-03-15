import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const Score = lazy(() => import("@/modules/Score"));

const ScorePage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <Score />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ScorePage;