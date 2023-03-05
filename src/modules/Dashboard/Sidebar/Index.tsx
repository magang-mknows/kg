import React, { FC, ReactElement } from "react";
import { Inter } from "next/font/google";
import Resume from "./Resume";
import PapanScore from "./PapanScore";
const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

const Sidebar: FC = (): ReactElement => {
  return (
    <div className={`${inter.className}`}>
      <Resume />
      <PapanScore />
    </div>
  );
};

export default Sidebar;
