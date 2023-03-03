import { FC, ReactElement } from "react";
import NextIcon from "@/assets/next-icon.svg";
import Image from "next/image";

const BreadCrumb: FC = (): ReactElement => {
  return (
    <nav className="flex justify-start w-full px-20 mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex space-x-1 md:space-x-3">
        <li className="inline-flex ">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-[#106FA4] dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex gap-2">
            <Image src={NextIcon} alt={"next-icon"} width={8} />
            <a
              href="#"
              className="ml-1 text-sm font-medium text-[#737373] dark:text-gray-400 dark:hover:text-white text-[14px] text-[600]"
            >
              Penugasan
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
