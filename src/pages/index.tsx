import Landing from "@/modules/Landing";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Fragment, ReactElement } from "react";

const LandingPages: NextPage = (): ReactElement => {
  return (
    <Fragment>
      <NextSeo
        title="Landing Page Kampus Gratis"
        description="Kampus grais adalah webisite untuk orang orang yang ingin mengenyam bangku kuliah tanpa biaya namun dengan standard nasional"
      />
      <Landing />
    </Fragment>
  );
};

export default LandingPages;
