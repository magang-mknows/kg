import type { NextPage } from "next";
import { ReactElement, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "@/modules/Common/SuspenseError";
import StatusSkeleton from "@/components/Loading/MyStudy/StatusSkeleton";

const StatusPage = lazy(() => import("@/modules/MyStudy/Penugasan/Status"));

const StatusPenugasan: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<StatusSkeleton />}>
        <BaseLayouts>
          <StatusPage />
        </BaseLayouts>
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default StatusPenugasan;
