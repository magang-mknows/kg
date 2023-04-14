import { FC, ReactElement } from "react";
import TabelDetailContract from "@/components/StudyPlan/TabelDetailContract";
import Alert from "@/components/StudyPlan/Alert";
import { moveProps } from "@/components/StudyPlan/types";

const Contract: FC<moveProps> = ({ onClick, onMove }): ReactElement => {
  return (
    <>
      <Alert detail="KRS yang ditambahkan dapat dilihat pada tab Draft KRS" />
      <TabelDetailContract onClick={onClick} onMove={onMove} />
    </>
  );
};

export default Contract;
