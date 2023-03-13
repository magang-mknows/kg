import { FC, ReactElement } from "react";
import TabelDetailContract from "@/components/StudyPlan/TabelDetailContract";
import Alert from "@/components/StudyPlan/Alert";

const Contract: FC = (): ReactElement => {
  return (
    <>
      <Alert detail="KRS yang ditambahkan dapat dilihat pada tab Draft KRS" />
      <TabelDetailContract />
    </>
  );
};

export default Contract;
