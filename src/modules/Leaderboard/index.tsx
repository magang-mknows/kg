import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { leaderBoardBreadCumbs } from "@/utilities/constant";
import React, { ReactElement } from "react";
import ContentSection from "./ContentSection";

const LeaderBoardModules = (): ReactElement => {
  return (
    <BaseLayoutsLanding className="!bg-[#FAFAFA]">
      <BreadCrumb items={leaderBoardBreadCumbs} />
      <ContentSection />
    </BaseLayoutsLanding>
  );
};

export default LeaderBoardModules;
