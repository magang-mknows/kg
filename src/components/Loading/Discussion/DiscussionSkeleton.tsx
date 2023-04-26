import { FC, ReactElement } from "react";
import BreadcrumbAssignment from "../Assigment/Breadcrumb";
import NavbarSkeleton from "../Navbar";

const DiscussionSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse">
      <NavbarSkeleton />
      <BreadcrumbAssignment />
      <div className="w-full h-screen px-6 py-10 mb-20 bg-neutral-100 md:px-8 lg:px-10 lg:py-0">
        {/* Hero Section */}
        <section className="flex gap-10 h-1/2 md:gap-20">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="w-3/4 h-12 mb-2 bg-gray-200 rounded-md "></h1>
            <p className="w-3/4 h-6 bg-gray-200 rounded-md"></p>
          </div>
          <div className="flex items-center justify-center w-full h-full bg-gray-200"></div>
        </section>
        {/* Content Section */}
        <section className="px-8 py-8 bg-white rounded-md ">
          <section className="flex flex-wrap items-center justify-between w-full mb-6 md:flex-nowrap gap-x-2 gap-y-3">
            <label className="flex  px-3 w-full gap-4 items-center rounded-md shadow-sm  bg-gray-200 h-[42px] lg:h-[50px]">
              <input type="text" className="px-2 text-xs bg-transparent " />
            </label>
            <section className="w-full md:w-[200px] lg:w-[200px] h-[42px] lg:h-[50px] flex justify-start md:justify-end">
              <div className="w-full h-full bg-gray-200 rounded-md"></div>
            </section>
          </section>
          <div>
            <section className="relative w-full py-4">
              <div className="px-5 py-5 bg-white border-2 rounded-md md:px-8 lg:px-10 dark:border-none">
                <div className="flex justify-between">
                  <section className="flex items-center gap-4 mb-6 border-neutral-100/60">
                    <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-24 h-4 bg-gray-200 rounded-md"></h1>
                      <p className="w-24 h-4 bg-gray-200 rounded-md"></p>
                    </div>
                  </section>
                  <div className="w-4 h-10 bg-gray-200 rounded-md"></div>
                </div>
                <section className="text-sm text-neutral-900">
                  <h1 className="w-48 h-6 mb-3 bg-gray-200 rounded-md"></h1>
                  <p className="w-48 h-6 pr-0 mb-6 bg-gray-200 rounded-md md:pr-4 lg:pr-20 md:mb-8 lg:mb-10"></p>

                  <div className="flex items-center gap-6">
                    <section className="flex items-center w-12 h-4 gap-2 bg-gray-200 rounded-md"></section>
                    <section className="flex items-center w-24 h-4 gap-2 bg-gray-200 rounded-md"></section>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiscussionSkeleton;
