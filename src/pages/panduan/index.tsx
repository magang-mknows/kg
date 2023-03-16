import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const Landing = lazy(() => import("@/modules/Guide"));

const Panduan: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <Landing />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Panduan;
