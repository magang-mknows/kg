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
import { ReactElement, useEffect, useState } from "react";
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
import SuspenseError from "@/modules/Common/SuspenseError";
import Loading from "@/components/Loading";
import { DefaultSeo } from "next-seo";
import TokenService from "@/services/Token";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

if (TokenService.getToken()){
ApiService.setHeader()
} else {
ApiService.removeHeader()
}

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;
  return (
    <SuspenseError loadingFallback="Loading...">
      <DefaultSeo
        title="Kampus Gratis"
        description="Kampus Gratis membuat kuliah jadi gratis dan bisa di nikmati olaeh banyak umat"
        openGraph={{
          type: "website",
          locale: "id_ID",
          url: "https://kampusgratis.id",
          siteName: "Kampus Gratis",
        }}
      />
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          <style jsx global>{`
            html {
              font-family: ${montserrat.style.fontFamily};
            }
          `}</style>
          <ThemeProvider attribute="class" enableSystem={true} disableTransitionOnChange>
            <Hydrate state={pageProps.dehydratedState}>
              <RecoilRoot>
                <Component {...pageProps} />
              </RecoilRoot>
            </Hydrate>
          </ThemeProvider>
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </SuspenseError>
  );
}
