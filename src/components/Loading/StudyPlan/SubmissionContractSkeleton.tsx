import { FC, ReactElement } from "react";
import NavbarSkeleton from "../Navbar";
import BreadcrumbAssignment from "../Assigment/Breadcrumb";

const SubmissionContractSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse">
      <NavbarSkeleton />
      <BreadcrumbAssignment />
      <div className="flex flex-col w-full px-0 py-6 lg:px-16">
        <div className="flex p-8 py-4 w-[100%]">
          <div className="flex flex-col gap-4 py-4 pb-4">
            <div className="flex gap-6">
              <section className="flex items-center justify-center text-xl font-semibold text-transparent bg-gray-200 rounded-md lg:text-2xl">
                Pengajuan Kartu Rencana Study
              </section>
              <section className="text-center lg:!w-44 !w-36 lg:!h-14 !h-10 py-4 bg-gray-200 rounded-md" />
            </div>
            <div className="flex flex-col gap-4">
              <section className="flex flex-row py-3 bg-gray-200 rounded-md " />
              <section className="flex flex-row py-3 bg-gray-200 rounded-md " />
              <section className="flex flex-row py-3 bg-gray-200 rounded-md " />
              <section className="flex flex-row py-3 bg-gray-200 rounded-md " />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <section className="mx-4 bg-gray-200 lg:ml-80 w-full h-[42px] lg:w-[328px] lg:h-[56px] text-[16px] font-medium rounded-md"></section>
        </div>
        <div className="px-4 mx-auto md:w-full">
          <div className="flex mx-4 my-6">
            <div className="flex flex-col w-full divide-neutral-400 ">
              <section className="h-12 col-span-12 bg-gray-200 rounded-t-lg" />
              <section className="h-24 col-span-12 bg-gray-100 border-black border-y" />
              <section className="h-24 col-span-12 bg-gray-100 rounded-b-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionContractSkeleton;
