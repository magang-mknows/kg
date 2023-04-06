import { FC, ReactElement } from "react";
import NavbarSkeleton from "@/components/Loading/Navbar";
import BreadcrumbAssignment from "@/components/Loading/Assigment/Breadcrumb";

const StudyProgramSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse">
      <NavbarSkeleton />
      <BreadcrumbAssignment />
      <div className="p-8 mt-10 mb-10">
        <section className="w-full h-[56px] bg-gray-200 rounded-lg" />
      </div>
      <div className="px-10">
        <section className="flex w-full h-12 px-6 py-3 text-transparent bg-gray-200 border rounded " />
        <div className="grid grid-cols-1 gap-4 pb-40 lg:grid-cols-4">
          <div className="flex flex-col gap-4 p-4 auto">
            <section className="p-2 bg-gray-200 rounded-lg h-52 w-96" />
            <div className="flex flex-row gap-2 px-2">
              <section className="h-6 px-2 text-transparent bg-gray-200 rounded-md w-28" />
              <section className="w-20 h-6 px-2 text-transparent bg-gray-200 rounded-md" />
            </div>
            <section className="w-full h-6 px-4 text-xl text-transparent bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyProgramSkeleton;
