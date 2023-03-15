import type { NextPage } from "next";
import { ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

// const SekilasIlmu = lazy(() => import("@/modules/SekilasIlmu"));

const SekilasIlmuPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <>tes ya</>
      </Suspense>
    </ErrorBoundary>
  );
};

export default SekilasIlmuPage;
