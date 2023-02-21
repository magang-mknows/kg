import { FC, ReactNode } from "react";

type MainLayoutType = {
  children: ReactNode;
  className: string;
  id: string;
};

const MainLayouts: FC<MainLayoutType> = ({ children, className, id }) => {
  return (
    <section
      className={`grid grid-col-1 md:grid-cols-2 gap-y-5 gap-x-10 py-5 px-[10%] min-h-screen ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default MainLayouts;
