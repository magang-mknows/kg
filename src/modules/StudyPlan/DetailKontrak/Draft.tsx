import { FC, ReactElement } from "react";
import TabelDraft from "@/components/StudyPlan/TabelDraft";
import GlobalButton from "@/components/Common/GlobalButton";

const Draft: FC = (): ReactElement => {
  return (
    <>
      <TabelDraft />
      <div className="flex justify-end mr-8">
        <GlobalButton color="green" size="regular" text={"Submit"} />
      </div>
    </>
  );
};

export default Draft;
