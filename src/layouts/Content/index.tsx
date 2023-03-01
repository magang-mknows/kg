import { FC, ReactElement } from "react";
import { ContentLayoutTypes } from "./types";

const ContentLayouts: FC<ContentLayoutTypes> = ({ children, className }): ReactElement => {
  return (
    <section
      className={`flex flex-col md:flex-row gap-4 flex-wrap justify-center items-center ${className}`}
    >
      {children}
    </section>
  );
};

export default ContentLayouts;
