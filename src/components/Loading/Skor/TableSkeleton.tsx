import { FC, ReactElement } from "react";

const TableSkeleton: FC = (): ReactElement => {
  return (
    <div className="lg:w-[50%] w-[100%]">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden ">
            <table className="min-w-full divide-y ">
              <thead className="bg-neutral-200">
                <tr className=" divide-x divide-neutral-300 ">
                  {[...Array(4)].map((_, i) => (
                    <th key={i} scope="col" className="px-6 py-5"></th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-400 dark:divide-gray-700 text-center text-primary-600 font-bold">
                {[...Array(3)].map((x, y) => (
                  <tr key={y}>
                    {[...Array(4)].map((a, b) => (
                      <td
                        key={b}
                        className="px-6 py-6 border-r dark:border-r-white whitespace-nowrap text-sm dark:text-white "
                      ></td>
                    ))}
                  </tr>
                ))}

                <tr>
                  <td scope="col" className="text-centerpy-4 dark:text-white" colSpan={3}></td>
                  <td className="col-span-4 py-7 dark:text-white"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
