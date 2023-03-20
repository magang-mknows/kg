import { ReactNode } from "react";

export type SuspenseErrorProps = {
  errorFallback?: ReactNode;
  loadingFallback?: ReactNode;
  children: ReactNode;
};
