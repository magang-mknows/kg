import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";
import LoadingGuide from "@/modules/Guide/loading";

const Landing = lazy(() => import("@/modules/Guide"));

const Panduan: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingGuide />}>
      <Landing />
    </SuspenseError>
  );
};

export default Panduan;
