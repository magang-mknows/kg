import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilEnv, RecoilRoot } from "recoil";
import ApiService from "@/services/Api";
import ProtectedRoutes from "@/modules/Auth/ProtectedRoutes";
import configs from "@/configs";
import { useRouter } from "next/router";
import { publicRoutes } from "@/utilities/constant";
import { ReactElement } from "react";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
ApiService.init(configs.apiURL);

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          {publicRoutes.includes(router.pathname) ? (
            <ThemeProvider attribute="class" enableSystem={true}>
              <Component {...pageProps} />
            </ThemeProvider>
          ) : (
            <ThemeProvider attribute="class" enableSystem={true}>
              <ProtectedRoutes>
                <Component {...pageProps} />
              </ProtectedRoutes>
            </ThemeProvider>
          )}
        </Hydrate>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
