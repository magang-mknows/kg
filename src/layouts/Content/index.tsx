import { FC, ReactNode } from "react";

type ContentLayoutType = {
  children: ReactNode;
  className: string;
};

const ContentLayouts: FC<ContentLayoutType> = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-4 flex-wrap justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentLayouts;
