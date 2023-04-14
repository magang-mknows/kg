import { FC, lazy, ReactElement } from "react";

const CardModul = lazy(() => import("@/components/MyStudy/ModulCard"));

const Modul: FC = (): ReactElement => {
  return <CardModul />;
};

export default Modul;
