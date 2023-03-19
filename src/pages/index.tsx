import SuspenseError from "@/modules/Common/SuspenseError";
import type { NextPage } from "next";
import { lazy, ReactElement } from "react";

const Landing = lazy(() => import("@/modules/Landing"));

const LandingPages: NextPage = (): ReactElement => {
  return (
    <SuspenseError>
      <Landing />
    </SuspenseError>
  );
};

export default LandingPages;
