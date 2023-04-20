import SuspenseError from "@/modules/Common/SuspenseError";
import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import BaseLayouts from "@/layouts/Base";
import { assigmentBreadCumbs } from "@/utilities/constant";
import LoadingAssigment from "@/modules/Assigment/loading";

const BannerAssignment = lazy(() => import("@/modules/Assigment/BannerSection"));
const ContentAssignment = lazy(() => import("@/modules/Assigment/ContentSection"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const AssigmentPages: NextPage = (): ReactElement => {
  return (
    <SuspenseError loadingFallback={<LoadingAssigment />}>
      <BaseLayouts>
        <BreadCrumbs items={assigmentBreadCumbs} />
        <BannerAssignment />
        <ContentAssignment />
      </BaseLayouts>
    </SuspenseError>
  );
};

export default AssigmentPages;
