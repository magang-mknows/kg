import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement } from "react";
import { modulBreadCumbs } from "@/utilities/constant";

const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));
const CardModul = lazy(() => import("@/components/MyStudy/ModulCard"));

const Modul: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <BreadCrumbs items={modulBreadCumbs} />
      <CardModul />
    </BaseLayouts>
  );
};

export default Modul;
