import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement } from "react";
import ScoreSection from "./ScoreSection";

const Score: FC = (): ReactElement => {
  return (
    <>
      <BaseLayouts>
        <ScoreSection />
      </BaseLayouts>
    </>
  );
};

export default Score;
