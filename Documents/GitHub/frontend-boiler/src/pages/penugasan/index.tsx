import SuspenseError from "@/modules/Common/SuspenseError";
import type { NextPage } from "next";
import { lazy, ReactElement } from "react";
import BannerSkeleton from "@/components/Loading/Assigment/BannerSkeleton";
import ContentSkeleton from "@/components/Loading/Assigment/ContentSkeleton";
import BreadcrumbSkeleton from "@/components/Loading/Assigment/Breadcrumb";
import BaseLayouts from "@/layouts/Base";
import { assigmentBreadCumbs } from "@/utilities/constant";

const BannerAssignment = lazy(() => import("@/modules/Assigment/BannerSection"));
const ContentAssignment = lazy(() => import("@/modules/Assigment/ContentSection"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const AssigmentPages: NextPage = (): ReactElement => {
  return (
    <BaseLayouts>
      <SuspenseError loadingFallback={<BreadcrumbSkeleton />}>
        <BreadCrumbs items={assigmentBreadCumbs} />
      </SuspenseError>
      <SuspenseError loadingFallback={<BannerSkeleton />}>
        <BannerAssignment />
      </SuspenseError>
      <SuspenseError loadingFallback={<ContentSkeleton />}>
        <ContentAssignment />
      </SuspenseError>
    </BaseLayouts>
  );
};

export default AssigmentPages;
