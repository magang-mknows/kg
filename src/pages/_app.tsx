import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilEnv, RecoilRoot } from "recoil";
import ApiService from "@/services/Api";
import configs from "@/configs";
import { ReactElement } from "react";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
ApiService.init(configs.apiURL);

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>{`
        html {
          font-family: ${""};
        }
      `}</style>
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider attribute="class" enableSystem={true}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
