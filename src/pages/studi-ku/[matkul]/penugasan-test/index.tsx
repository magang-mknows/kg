import type { NextPage } from "next";
import { ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
import Status from "@/modules/MyStudy/Penugasan/Status";
import BaseLayouts from "@/layouts/Base";
import SuspenseError from "@/modules/Common/SuspenseError";
import StatusSkeleton from "@/components/Loading/MyStudy/StatusSkeleton";

const StatusPenugasan: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<StatusSkeleton />}>
        <BaseLayouts>
          <Status />
        </BaseLayouts>
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default StatusPenugasan;
