import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
import Status from "@/modules/Studiku/Penugasan/Status";
import BaseLayouts from "@/layouts/Base";

const Score = lazy(() => import("@/modules/Score"));

const StatusPenugasan: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <BaseLayouts>
        <Status/>
        </BaseLayouts>
      </Suspense>
    </ErrorBoundary>
  );
};

export default StatusPenugasan;