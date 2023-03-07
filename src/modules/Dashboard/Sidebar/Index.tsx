import React, { FC, ReactElement } from "react";
import { Inter } from "next/font/google";
import Resume from "./Resume";
import PapanScore from "./PapanScore";
import ProgressSection from "../Content/ProgressSection";
import ArticleSection from "./ArticleSection";
const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

const Sidebar: FC = (): ReactElement => {
  return (
    <>
      <div className={`${inter.className}`}>
        <Resume />
        <PapanScore />
        <ArticleSection />
        <ProgressSection/>
      </div>
    </>
  );
};

export default Sidebar;
