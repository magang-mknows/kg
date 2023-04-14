import React, { FC, ReactElement } from "react";
import ContentLayouts from "@/layouts/Content";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

import SummaryTable from "./SummaryTable";
import { useRecoilValue } from "recoil";
import { ShowDetailStatus } from "@/stores/Score";
import ScoreDetail from "./ScoreDetailSection";
import SummaryChart from "./SummaryChart";

const ScoreSection: FC = (): ReactElement => {
  const getDetailStatus = useRecoilValue(ShowDetailStatus);

  return (
    <>
      <ContentLayouts
        withGrid={!getDetailStatus ? true : false}
        className={`${montserrat.className} ${
          !getDetailStatus ? "grid-cols-1 lg:grid-cols-2 justify-center gap-6" : ""
        }  w-full `}
      >
        {!getDetailStatus ? (
          <>
            <SummaryChart />
            <SummaryTable />
          </>
        ) : (
          <ScoreDetail />
        )}
      </ContentLayouts>
    </>
  );
};

export default ScoreSection;
