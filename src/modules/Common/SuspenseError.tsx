import Loading from "@/components/Loading";
import { FC, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SuspenseErrorProps } from "./types";

const SuspenseError: FC<SuspenseErrorProps> = ({
  errorFallback = <Loading />,
  loadingFallback = <span className="text-red-600">Error was happen</span>,
  children,
}): ReactElement => {
  return (
    <Suspense fallback={loadingFallback}>
      <ErrorBoundary fallback={<>{errorFallback}</>}>{children}</ErrorBoundary>
    </Suspense>
  );
};

export default SuspenseError;
