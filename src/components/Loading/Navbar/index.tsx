import { FC, Fragment, ReactElement } from "react";
import BottomSectionSkeleton from "./BottomSectionSkeleton";

import UpperSectionSkeleton from "./UpperSectionSkeleton";

const NavbarSkeleton: FC = (): ReactElement => {
  return (
    <Fragment>
      <nav className="w-full bg-white animate-pulse">
        <UpperSectionSkeleton />
        <BottomSectionSkeleton />
      </nav>
    </Fragment>
  );
};

export default NavbarSkeleton;
