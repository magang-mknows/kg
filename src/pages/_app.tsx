import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { RecoilEnv, RecoilRoot } from "recoil";
import ApiService from "@/services/Api";
import configs from "@/configs";
import { ReactElement, Suspense } from "react";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
ApiService.init(configs.apiURL);

import { Montserrat } from "next/font/google";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary
        fallback={
          <div className="flex items-center justify-center w-full h-screen">
            <span className="text-red-700 font-bold text-4xl">Error was happen</span>
          </div>
        }
      >
        <QueryClientProvider client={queryClient}>
          <style jsx global>{`
            html {
              font-family: ${montserrat.style.fontFamily};
            }
          `}</style>
          <RecoilRoot>
            <QueryErrorResetBoundary>
              <Hydrate state={pageProps.dehydratedState}>
                <ThemeProvider attribute="class" enableSystem={true}>
                  <Component {...pageProps} />
                </ThemeProvider>
              </Hydrate>
            </QueryErrorResetBoundary>
          </RecoilRoot>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
