import { FC, ReactElement } from "react";
import { ContentLayoutTypes } from "./types";

const ContentLayouts: FC<ContentLayoutTypes> = ({ children, className }): ReactElement => {
  return <section className={` ${className}`}>{children}</section>;
};

export default ContentLayouts;
