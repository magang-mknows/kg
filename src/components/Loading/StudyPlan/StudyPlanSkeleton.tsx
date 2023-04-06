import { FC, ReactElement } from "react";
import NavbarSkeleton from "@/components/Loading/Navbar";
import BreadcrumbAssignment from "@/components/Loading/Assigment/Breadcrumb";

const StudyPlanSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse">
      <NavbarSkeleton />
      <BreadcrumbAssignment />
      <div className="px-9">
        <section className="w-64 py-4 bg-gray-200 rounded-lg" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-4 p-4 auto">
            <section className="p-2 bg-gray-200 rounded-lg h-52 w-96" />
            <div className="px-2">
              <section className="px-2 text-transparent bg-gray-200 rounded-md w-fit">
                6 Program Studi
              </section>
            </div>
            <section className="w-full h-6 px-4 text-xl text-transparent bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlanSkeleton;
