import { useChooseSidebar } from "@/hooks/MyStudy/useChooseSidebar";
import { useSidebar } from "@/hooks/MyStudy/useDiscussion";
import { FC, ReactElement, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const { getDiscussion } = useSidebar();
  const { setChoose, getChoose } = useChooseSidebar();

  return (
    <>
      {/* <RxHamburgerMenu className="text-[#9CA3AF] dark:text-white/80 text-[20px] font-[800]" /> */}
      <div className="py-6 px-5 bg-white rounded-[8px] dark:bg-[#1B1E21]">
        {getDiscussion.map((items, i) => (
          <div key={i}>
            <div className="flex flex-row justify-between items-center mb-5 ">
              <h1 className="text-[#737373] dark:text-white/80 text-[14px] font-[600]">
                {items.session}
              </h1>
              <div
                className="text-[#9CA3AF]"
                onClick={() => setIsOpen(isOpen === true ? false : true)}
              >
                {isOpen === true ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
              </div>
            </div>
            {items.modul.map((item, j) => (
              <div key={j}>
                {isOpen && (
                  <div
                    className={`text-[#106FA4] text-[14px] font-[600] h-10 flex items-center ml-4 px-4 rounded-[8px] mb-2 dark:text-yellow-500 ${
                      getChoose == item.id ? "bg-[#E9F6FD] dark:bg-yellow-100" : ""
                    } `}
                    onClick={() => setChoose(item.id)}
                  >
                    {item.modul}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
