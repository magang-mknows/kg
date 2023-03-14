import Image from "next/image";
import { FC, ReactElement } from "react";
import userIcon from "@/assets/userIcon.png";
import { Menu, Transition } from "@headlessui/react";
import { RiDashboardFill, RiSettings5Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const UserIcon: FC = (): ReactElement => {
  const UserMenu = [
    {
      icon: <RiDashboardFill className="text-blue-400 rounded-md" size={22} />,
      name: "dashboard",
    },
    {
      icon: <FaUserCircle className="text-yellow-400 rounded-md" size={22} />,
      name: "Profile",
    },
    {
      icon: <RiSettings5Fill className="text-gray-400 rounded-md" size={22} />,
      name: "Pengaturan",
    },
    {
      icon: <FiLogOut className="text-pink-400 rounded-md" size={22} />,
      name: "Logout",
    },
  ];

  return (
    <>
      <Menu as="div" className={"relative inline-block text-left z-50 left-0 mt-1.5"}>
        <Menu.Button>
          <div className="bg-neutral-200 h-9 w-9 flex items-center justify-center  overflow-hidden rounded-md cursor-pointer group">
            <Image src={userIcon} alt="User" />
          </div>
        </Menu.Button>

        <Transition
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 -translate-y-12"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease duration-300 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-12"
        >
          <Menu.Items
            as="div"
            className="absolute top-2 right-0 w-30 origin-top-right  overflow-hidden rounded-md bg-white  shadow-lg dark:bg-[#106FA4]"
          >
            <div className="w-[260px] px-4 py-3 flex items-center gap-3 border-b-2 border-neutral-200">
              <Image src={userIcon} alt="User" />
              <section>
                <h1 className="text-sm text-neutral-900 dark:text-white">Mario Silalahi</h1>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">user@jshdj.com</p>
              </section>
            </div>

            {UserMenu.map(({ icon, name }, index) => (
              <Menu.Item
                key={index}
                as="div"
                className={
                  "flex gap-3 items-center px-4 py-3 cursor-pointer hover:bg-[#0b5c88] transition-all duration-300 ease-in-out"
                }
              >
                {icon}
                <h1 className="text-[#171717] dark:text-white text-xs text-center">{name}</h1>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default UserIcon;
