import type { NextPage } from "next";
import { lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

// const SekilasIlmu = lazy(() => import("@/modules/SekilasIlmu"));

const SekilasIlmuPage: NextPage = (): ReactElement => {
  return (<>tes ya</>
    // <ErrorBoundary fallback={<>Error was happen</>}>
    //   <Suspense fallback={<Loading />}>
    //     <SekilasIlmu />
    //   </Suspense>
    // </ErrorBoundary>
  );
};

export default SekilasIlmuPage;
