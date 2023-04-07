import React, { FC, ReactElement } from "react";

const BottomSectionSkeleton: FC = (): ReactElement => {
  return (
    <section className="hidden bg-white lg:flex items-center h-[84px] border-b-2 px-6 md:px-8 lg:px-10  border-neutral-100 dark:border-[#373a3e4a]">
      <div>
        <ul className="flex items-center gap-x-2">
          <div className="flex gap-2 px-2 py-1 text-xs text-white bg-gray-200 rounded-lg xl:px-4 xl:text-sm">
            <li className="text-transparent">Dashboard</li>
          </div>
          <div className="flex gap-2 px-2 py-1 text-xs text-white bg-gray-200 rounded-lg xl:px-4 xl:text-sm">
            <li className="text-transparent">Studi-Ku</li>
          </div>
          <div className="flex gap-2 px-2 py-1 text-xs text-white bg-gray-200 rounded-lg xl:px-4 xl:text-sm">
            <li className="text-transparent">Penugasan</li>
          </div>
          <div className="flex gap-2 px-2 py-1 text-xs text-white bg-gray-200 rounded-lg xl:px-4 xl:text-sm">
            <li className="text-transparent">Rencana Studi</li>
          </div>
          <div className="flex gap-2 px-2 py-1 text-xs text-white bg-gray-200 rounded-lg xl:px-4 xl:text-sm">
            <li className="text-transparent">Nilai & Sertifikat</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default BottomSectionSkeleton;
