import Loading from "@/components/Loading";
import DiscussionModules from "@/modules/DiscussionRoom";
import type { NextPage } from "next";
import React, { ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const DiscussionRoomPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <DiscussionModules />
      </Suspense>
    </ErrorBoundary>
  );
};

export default DiscussionRoomPages;
