import { FC, Fragment, lazy, ReactElement } from "react";
import { GoKebabVertical } from "react-icons/go";
import { AiFillFlag } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

import SuspenseError from "@/modules/Common/SuspenseError";
import { usePopupEditDiscussionStatus } from "@/hooks/Discussion/usePopupEditDiscussionStatus";
import { usePopupDeleteDiscussionStatus } from "@/hooks/Discussion/usePopupDeleteDiscussionStatus";
import { usePopupReportDiscussionStatus } from "@/hooks/Discussion/usePopupReportDiscussionStatus";

const PopupModalEditDiscussion = lazy(
  () => import("@/modules/DiscussionRoom/PopupModalEditDiscussion"),
);
const PopupModalDeleteDiscussion = lazy(
  () => import("@/modules/DiscussionRoom/PopupModalDeleteDiscussion"),
);
const PopupModalReportDiscussion = lazy(
  () => import("@/modules/DiscussionRoom/PopupModalReportDiscussion"),
);

const PostOption: FC = (): ReactElement => {
  const { setPopupEditStatus } = usePopupEditDiscussionStatus();
  const { setPopupDeleteStatus } = usePopupDeleteDiscussionStatus();
  const { setPopupReportStatus } = usePopupReportDiscussionStatus();

  const options = [
    {
      title: "Report",
      icon: <AiFillFlag className="text-primary-500" />,
      trigger: setPopupReportStatus,
    },
    {
      title: "Edit",
      icon: <BsPencilFill className="text-yellow-500" />,
      trigger: setPopupEditStatus,
    },
    {
      title: "Delete",
      icon: <MdDelete className="text-red-500" />,
      trigger: setPopupDeleteStatus,
    },
  ];

  return (
    <Fragment>
      <Menu as="div" className={"relative inline-block text-left z-50 left-0 mt-1.5"}>
        <Menu.Button>
          <div className="cursor-pointer text-neutral-800 group">
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
            className="absolute right-0 overflow-hidden origin-top-right bg-white rounded-md shadow-lg top-2 w-30 "
          >
            {options.map(({ icon, title, trigger }, index) => (
              <Menu.Item
                key={index}
                as="div"
                onClick={() => trigger(true)}
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
      <SuspenseError>
        <PopupModalEditDiscussion />
        <PopupModalDeleteDiscussion />
        <PopupModalReportDiscussion />
      </SuspenseError>
    </Fragment>
  );
};

export default PostOption;
