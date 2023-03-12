import Loading from "@/components/Loading";
import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Landing = lazy(() => import("@/modules/Landing"));

const LandingPages: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <Landing />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LandingPages;
