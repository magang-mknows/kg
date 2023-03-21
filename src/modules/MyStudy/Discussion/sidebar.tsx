import { FC, ReactElement, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar: FC = (): ReactElement => {
  return (
    <>
      <div className="py-6 px-5 bg-white rounded-[8px] dark:bg-[#1B1E21]">
        <div className="flex flex-row justify-between items-center mb-5  ">
          <h1 className="text-[#737373] dark:text-white/80 text-[14px] font-[600]">Pertemuan 1</h1>
          <IoMdArrowDropdown className="text-[#9CA3AF]" />
        </div>
        <div className="text-[#106FA4] text-[14px] font-[600]  bg-[#E9F6FD] dark:bg-yellow-100 h-10 flex items-center ml-4 px-4 rounded-[8px] mb-2 dark:text-yellow-500">
          Modul 1
        </div>
        <div className="text-[#106FA4] text-[14px] font-[600] bg-[#fff] dark:bg-[#1B1E21] h-10 flex items-center ml-4 px-4 rounded-[8px] dark:text-yellow-500">
          Modul 2
        </div>
      </div>
    </>
  );
};

export default Sidebar;
