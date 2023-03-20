import { FC, ReactElement, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar: FC = (): ReactElement => {
  return (
    <>
      <div className="py-6 px-5 bg-white rounded-[8px]">
        <div className="flex flex-row justify-between items-center mb-5  ">
          <h1 className="text-[#737373] text-[14px] font-[600]">Pertemuan 1</h1>
          <IoMdArrowDropdown className="text-[#9CA3AF]" />
        </div>
        <div className="text-[#106FA4] text-[14px] font-[600] bg-[#E9F6FD] h-10 flex items-center ml-4 px-4 rounded-[8px] mb-2">
          Modul 1
        </div>
        <div className="text-[#106FA4] text-[14px] font-[600] bg-[#fff] h-10 flex items-center ml-4 px-4 rounded-[8px]">
          Modul 2
        </div>
      </div>
    </>
  );
};

export default Sidebar;
