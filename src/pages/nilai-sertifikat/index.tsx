import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SkorSkeleton from "@/components/Loading/Skor/SkorSkeleton";
import SuspenseError from "@/modules/Common/SuspenseError";

const Score = lazy(() => import("@/modules/Score"));

const ScorePage: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<SkorSkeleton />}>
      <Score />
    </SuspenseError>
  );
};

export default ScorePage;
