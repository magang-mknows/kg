import { FC, ReactElement } from "react";
import BreadcrumbAssignment from "../Assigment/Breadcrumb";

const HistoryEventSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadcrumbAssignment />
      <div className="w-full px-6 animate-pulse md:px-8 lg:px-10">
        <div className="flex flex-col gap-4 animate-pulse lg:gap-0 lg:flex-row">
          {/* SideBar */}
          <div className="flex justify-center lg:justify-start lg:basis-1/3">
            <div className="animate-pulse flex flex-col gap-[36px] w-[339px] ">
              <div className="animate-pulse flex flex-col gap-[24px] ">
                <div className="bg-gray-200 animate-pulse"></div>
                <div className="bg-gray-200 animate-pulse"></div>
              </div>
              <div className="animate-pulse flex items-center justify-center flex-col rounded-[8px] gap-[8px] w-[339px] h-[188px] py-[20px] px-[16px] ">
                <div className="animate-pulse flex items-center px-[12px] rounded-[8px] w-full h-full bg-gray-200"></div>
                <div className="animate-pulse flex items-center px-[12px] rounded-[8px] w-full h-full bg-gray-200"></div>
                <div className="animate-pulse flex items-center px-[12px] rounded-[8px] w-full h-full bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:basis-2/3">
            {/* SearchBar */}
            <div className=" flex justify-center w-full rounded-[8px] mb-4 bg-gray-200 ">
              <button
                className="flex items-center rounded-l px-6 py-2.5 leading-tight"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <input
                type="search"
                className="flex-auto rounded-r px-3 py-1.5 bg-transparent text-[16px] font-[500] outline-none"
                placeholder=""
                aria-label="Cari mata kuliah"
              />
            </div>
            {/* CardList */}
            <div className="grid w-full grid-flow-row gap-4 lg:gap-8 ">
              <div className="flex auto bg-white rounded-lg w-full h-fit py-2 lg:py-0 flex-row gap-2 lg:gap-10 items-center dark:bg-[#1b1e21]">
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
              <div className="flex auto bg-white rounded-lg w-full h-fit py-2 lg:py-0 flex-row gap-2 lg:gap-10 items-center dark:bg-[#1b1e21]">
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
                  <div className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent text-[#737373] dark:text-white">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex justify-center items-center relative rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 text-sm font-medium text-white dark:text-white"></div>
                </li>
                <li aria-current="page">
                  <div className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 text-sm text-[#737373] dark:text-white"></div>
                </li>
                <li aria-current="page">
                  <div className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 text-sm text-[#737373] dark:text-white"></div>
                </li>
                <li aria-current="page">
                  <div className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 text-sm text-[#737373] dark:text-white"></div>
                </li>
                <li aria-current="page">
                  <div className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 text-sm text-[#737373] dark:text-white"></div>
                </li>
                <li aria-current="page">
                  <div className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-gray-200 py-1.5 px-3 text-sm text-[#737373] dark:text-white"></div>
                </li>
                <li>
                  <div className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-gray-200 text-[#737373] dark:text-white">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
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
