import { FC, ReactElement } from "react";
import SidebarSkeleton from "./SidebarSkeleton";
import BredcrumbDictionary from "../../Assigment/Breadcrumb";

const GuideDictionary: FC = (): ReactElement => {
  return (
    <div className="mt-36 ">
      <BredcrumbDictionary />
      <SidebarSkeleton />
    </div>
  );
};

export default GuideDictionary;
