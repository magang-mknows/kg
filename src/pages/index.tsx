import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Landing = lazy(() => import("@/modules/Landing"));

const Index: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={"Loadiing ges.."}>
        <Landing />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Index;
