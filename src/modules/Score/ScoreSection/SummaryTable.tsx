import GlobalButton from "@/components/Common/GlobalButton";
import { ShowDetailStatus } from "@/stores/Score";
import React, { FC, ReactElement } from "react";
import { useSetRecoilState } from "recoil";

const SummaryTable: FC = (): ReactElement => {
  const setDetailStatus = useSetRecoilState(ShowDetailStatus);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-neutral-400 dark:divide-gray-700">
              <thead className="bg-primary-500">
                <tr className="divide-x divide-neutral-300 dark:divide-gray-700">
                  <th scope="col" className="px-6 py-3 text-center font-medium text-white text-sm">
                    Semester
                  </th>
                  <th scope="col" className="px-6 py-3 text-center font-medium text-white text-sm">
                    SKS Diambil
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    SKS Luus
                  </th>
                  <th scope="col" className="px-6 py-3 text-center font-medium text-white text-sm">
                    IPK
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-400 dark:divide-gray-700 text-center text-primary-600 font-bold">
                <tr>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">3</td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">108</td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">96</td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">4.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">3</td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">108</td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">96</td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">4.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">3</td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">108</td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">96</td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">4.00</td>
                </tr>
                <tr>
                  <td scope="col" className="text-centerpy-4" colSpan={3}>
                    Rata-rata
                  </td>
                  <td className="col-span-4 py-4">4.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-end mb-10"
        onClick={() => {
          setDetailStatus(true);
        }}
      >
        <GlobalButton
          text="Lihat Detail Nilai"
          size="regular"
          className=" bg-green-500 hover:bg-green-600 cursor-pointer transition-colors ease-in-out duration-300 shadow-md text-sm flex relative items-center justify-center text-white"
        />
      </div>
    </div>
  );
};

export default SummaryTable;
