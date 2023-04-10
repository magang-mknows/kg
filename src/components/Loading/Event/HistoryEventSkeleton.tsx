import { FC, ReactElement } from "react";
import BreadcrumbAssignment from "../Assigment/Breadcrumb";
import NavbarSkeleton from "../Navbar";

const HistoryEventSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse">
      <NavbarSkeleton />
      <BreadcrumbAssignment />
      <div className="w-full px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row">
          {/* SideBar */}
          <div className="flex justify-center lg:justify-start lg:basis-1/3">
            <div className="flex flex-col gap-[36px] w-[339px] ">
              <div className="flex flex-col gap-[24px] ">
                <div className="bg-gray-200 animate-pulse"></div>
                <div className="bg-gray-200 animate-pulse"></div>
              </div>
              <div className="flex flex-col rounded-[8px] gap-[8px] w-[339px] h-[188px] py-[20px] px-[16px] ">
                <div className="px-[12px] rounded-[8px] w-full h-full bg-gray-200"></div>
                <div className="px-[12px] rounded-[8px] w-full h-full bg-gray-200"></div>
                <div className="px-[12px] rounded-[8px] w-full h-full bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:basis-2/3">
            {/* SearchBar */}
            <div className=" flex justify-center w-full rounded-[8px] mb-4 bg-gray-200 ">
              <input
                type="search"
                className="flex-auto rounded-r px-3 py-1.5 bg-transparent text-[16px] font-[500] outline-none"
                placeholder=""
              />
            </div>
            {/* CardList */}
            <div className="grid w-full grid-flow-row gap-4 lg:gap-8 ">
              <div className="flex flex-row w-full gap-2 py-2 bg-white rounded-lg auto h-fit lg:py-0 lg:gap-10">
                <div className="w-full bg-gray-200 rounded-lg h-[188px]"></div>
                <div className="flex flex-row w-full gap-2 lg:gap-4">
                  <div className="flex-col w-1/2 gap-4">
                    <h1 className="text-[16px] text-transparent bg-gray-200 mb-4 h-6 w-48 rounded-md"></h1>
                    <h1 className="text-[18px] text-transparent bg-gray-200 h-6 w-24 rounded-md">
                      Terdaftar
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-md"></div>
                    <h1 className="w-48 text-[16px] text-transparent bg-gray-200 rounded-md h-6"></h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center w-full gap-2 py-2 rounded-lg auto h-fit lg:py-0 lg:gap-10">
                <div className="w-full bg-gray-200 rounded-lg h-[188px]"></div>
                <div className="flex flex-row w-full gap-2 lg:gap-4">
                  <div className="flex-col w-1/2 gap-4">
                    <h1 className="text-[16px] text-transparent bg-gray-200 mb-4 w-fit rounded-md">
                      Webinar Cyber Security
                    </h1>
                    <h1 className="text-[18px] text-transparent bg-gray-200 w-fit rounded-md">
                      Terdaftar
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-md"></div>
                    <h1 className="text-[16px] text-transparent bg-gray-200 rounded-md h-fit">
                      Unduh Sertifikat
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center p-4 lg:justify-end">
              <ul className="flex gap-2">
                <li>
                  <div className="rounded-lg w-[36px] h-[36px] bg-gray-200 "></div>
                </li>
                <li aria-current="page">
                  <div className="rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 "></div>
                </li>
                <li aria-current="page">
                  <div className="rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 "></div>
                </li>
                <li aria-current="page">
                  <div className="rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 "></div>
                </li>
                <li aria-current="page">
                  <div className="rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 "></div>
                </li>
                <li aria-current="page">
                  <div className="rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 "></div>
                </li>
                <li aria-current="page">
                  <div className="rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 "></div>
                </li>
                <li>
                  <div className="rounded-lg w-[36px] h-[36px] bg-gray-200 "></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryEventSkeleton;
