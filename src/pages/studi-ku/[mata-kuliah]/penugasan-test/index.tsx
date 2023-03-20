import type { NextPage } from "next";
import { ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
import Status from "@/modules/MyStudy/Penugasan/Status";
import BaseLayouts from "@/layouts/Base";

const StatusPenugasan: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <BaseLayouts>
          <Status />
        </BaseLayouts>
      </Suspense>
    </ErrorBoundary>
  );
};

export default StatusPenugasan;
