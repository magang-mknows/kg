import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import GuideSkeleton from "@/components/Loading/Guide/GuideSkeleton";

const Landing = lazy(() => import("@/modules/Guide"));

const Panduan: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<GuideSkeleton />}>
      <Landing />
    </SuspenseError>
  );
};

export default Panduan;
