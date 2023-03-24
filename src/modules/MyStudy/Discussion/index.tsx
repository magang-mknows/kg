import { FC, lazy, ReactElement } from "react";

const Sidebar = lazy(() => import("@/modules/MyStudy/Discussion/sidebar"));
const Content = lazy(() => import("@/modules/MyStudy/Discussion/content"));

const Discussion: FC = (): ReactElement => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-10 px-6 md:px-8 lg:px-10 py-10 bg-[#FAFAFA] dark:bg-[#222529]">
      <div className="md:basis-3/12 ">
        <Sidebar />
      </div>
      <div className="">
        <Content />
      </div>
    </div>
  );
};

export default Discussion;
