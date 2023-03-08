import { FC, ReactElement } from "react";
import Link from "next/link";
import { BreadCrumbProps } from "./types";

const BreadCrumb: FC<BreadCrumbProps> = ({ items }): ReactElement => {
  return (
    <div
      className="grid place-content-start w-full px-10 md:px-14 lg:px-20 my-4 mt-5 text-[#737373] font-[600] text-[14px]"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex space-x-1 md:space-x-3">
        <li>
          {items.map((crumb, index) => {
            const isLastItem = index === items.length - 1;
            if (!isLastItem) {
              return (
                <>
                  <Link
                    href={crumb.link}
                    key={index}
                    className="inline-flex items-center text-[#106FA4] font-[600] text-[14px] dark:hover:text-white"
                  >
                    {crumb.name}
                  </Link>
                  <span className="px-3 text-[#A3A3A3] font-[600]">{">"}</span>
                </>
              );
            } else {
              return crumb.name;
            }
          })}
        </li>
      </ol>
    </div>
  );
};

export default BreadCrumb;
