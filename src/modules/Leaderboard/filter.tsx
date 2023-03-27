import React, { ReactElement, useState } from "react";
import { RxSlider } from "react-icons/rx";

const Filter = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("semua");
  return (
    <button
      className="w-[109px] h-[40px] rounded-[8px] text-center border-[3px] border-[#106FA4] relative mt-[46px] "
      onClick={() => setOpen(open == true ? false : true)}
    >
      <div className="my-auto flex justify-center gap-[10px] items-center">
        <p className="text-[#106FA4] text-[14px] dark:text-white">Filter</p>
        <RxSlider className="text-[#106FA4] dark:text-white" />
      </div>
      {open && (
        <div className="flex justify-end container mt-[10px] z-[9000] absolute w-[150px] -bottom-32 ease-in-out ">
          <div className="w-[160px] h-[114px] rounded-[8px] text-center  overflow-hidden shadow-2xl ">
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("semua")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "semua" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden hover:hover:bg-[#F5F5F5]`}
              ></div>
              <p className="text-[#262626] text-[14px] my-auto ml-3">Semua</p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("mata-kuliah")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "mata-kuliah" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden hover:hover:bg-[#F5F5F5]`}
              ></div>
              <p className="text-[#262626] text-[14px] my-auto ml-3">Mata Kuliah</p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("webinar")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "webinar" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden`}
              ></div>
              <p className="text-[#262626] text-[14px] my-auto ml-3">Webinar</p>
            </button>
          </div>
        </div>
      )}
    </button>
  );
};

export default Filter;
