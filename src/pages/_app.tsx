import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilEnv, RecoilRoot } from "recoil";
import ApiService from "@/services/Api";
import ProtectedRoutes from "@/modules/Auth/ProtectedRoutes";
import configs from "@/configs";
import { useRouter } from "next/router";
import { publicRoutes } from "@/utilities/constant";
import { ReactElement, Suspense } from "react";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
ApiService.init(configs.apiURL);

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {publicRoutes.includes(router.pathname) ? (
          <Suspense fallback="loading...">
            <ThemeProvider attribute="class" enableSystem={true}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Suspense>
        ) : (
          <Suspense fallback="loading...">
            <ThemeProvider attribute="class" enableSystem={true}>
              <ProtectedRoutes>
                <Component {...pageProps} />
              </ProtectedRoutes>
            </ThemeProvider>
          </Suspense>
        )}
      </RecoilRoot>
    </QueryClientProvider>
  );
}
