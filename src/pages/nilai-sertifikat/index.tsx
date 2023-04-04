import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import SkorSkeleton from "@/components/Loading/Skor/SkorSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const Score = lazy(() => import("@/modules/Score"));

const ScorePage: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<SkorSkeleton />}>
      <SkorSkeleton />
      <Score />
    </SuspenseError>
  );
};

export default ScorePage;
