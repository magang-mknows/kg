import { FC, ReactElement } from "react";
import { GoKebabVertical } from "react-icons/go";
import { AiFillFlag } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const PostOption: FC = (): ReactElement => {
  const options = [
    {
      title: "Report",
      icon: <AiFillFlag className="text-primary-500" />,
    },
    {
      title: "Edit",
      icon: <BsPencilFill className="text-yellow-500" />,
    },
    {
      title: "Delete",
      icon: <MdDelete className="text-red-500" />,
    },
  ];

  return (
    <Menu as="div" className={"relative inline-block text-left z-50 left-0 mt-1.5"}>
      <Menu.Button>
        <div className=" text-neutral-800 cursor-pointer group">
          <GoKebabVertical />
        </div>
      </Menu.Button>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items
          as="div"
          className="absolute top-2 right-0 w-30 origin-top-right  overflow-hidden rounded-md bg-white  shadow-lg "
        >
          {options.map(({ icon, title }, index) => (
            <Menu.Item
              key={index}
              as="div"
              className={
                "flex gap-3 items-center px-4 py-3 cursor-pointer  hover:bg-neutral-100 transition-all duration-300 ease-in-out"
              }
            >
              {icon}
              <h1 className="text-[#171717]  text-xs text-center">{title}</h1>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PostOption;
