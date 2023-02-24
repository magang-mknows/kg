import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilEnv, RecoilRoot } from "recoil";
import ApiService from "@/services/Api";
import ProtectedRoutes from "@/modules/Auth/ProtectedRoutes";
import configs from "@/configs";
import { useRouter } from "next/router";
import { publicRoutes } from "@/utilities/constant";
import { ReactElement } from "react";

const queryClient = new QueryClient();
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
ApiService.init(configs.apiURL);

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {publicRoutes.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoutes>
            <Component {...pageProps} />
          </ProtectedRoutes>
        )}
      </RecoilRoot>
    </QueryClientProvider>
  );
}
