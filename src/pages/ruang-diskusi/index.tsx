import DiscussionSkeleton from "@/components/Loading/Discussion/DiscussionSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";
import type { NextPage } from "next";
import React, { lazy, ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";

const DiscussionModules = lazy(() => import("@/modules/DiscussionRoom"));

const DiscussionRoomPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <SuspenseError loadingFallback={<DiscussionSkeleton />}>
        <DiscussionModules />
      </SuspenseError>
    </ErrorBoundary>
  );
};

export default DiscussionRoomPages;
