import { FC, ReactElement } from "react";

const MyCalendarSkeleton: FC = (): ReactElement => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const numDaysInMonth = new Date(year, month, 0).getDate();

  const dates = Array.from({ length: numDaysInMonth }, (_, i) => {
    const date = new Date(year, month - 1, i + 1);
    return { date };
  });

  return (
    <section className="w-full bg-gray-500 h-fit px-7 py-12 rounded-md">
      <header className="flex justify-between items-center">
        <h1 className="bg-gray-200 rounded-md w-[120px] h-7" />
        <p className="bg-gray-200 rounded-sm w-[80px] h-5" />
      </header>
      <p className="bg-gray-200 rounded-sm w-[40px] h-5 mt-2 mb-4" />
      <section className="flex justify-center items-center">
        <div className="mb-4 gap-2  w-full overflow-hidden overflow-x-scroll scrollbar-hide md:scrollbar-default  flex ">
          {dates.map((_, index) => {
            return (
              <section
                key={index}
                className="
                bg-gray-400 text-sm text-center cursor-pointer border-2 border-yellow-50/0  group px-3 py-3 rounded-md w-fit"
              >
                <p className="bg-gray-200 rounded-sm w-3 h-3 mb-1" />
                <p className="bg-gray-200 rounded-sm w-3 h-3" />
              </section>
            );
          })}
        </div>
      </section>
      <section className="text-sm">
        <div className="border-l-4 bg-gray-400 cursor-pointer group py-3 border-gray-600 px-3 rounded-md mb-4">
          <p className="mb-1 bg-gray-200 rounded-sm w-[100px] h-4" />
          <p className="mb-1 bg-gray-200 rounded-sm w-[200px] h-4" />
          <p className="mb-1 bg-gray-200 rounded-sm w-[80px] h-4" />
        </div>
        <div className="border-l-4 bg-gray-400 cursor-pointer group py-3  border-gray-600 px-3 rounded-md mb-4">
          <p className="mb-1 bg-gray-200 rounded-sm w-[100px] h-4" />
          <p className="mb-1 bg-gray-200 rounded-sm w-[200px] h-4" />
          <p className="mb-1 bg-gray-200 rounded-sm w-[80px] h-4" />
        </div>
      </section>
    </section>
  );
};

export default MyCalendarSkeleton;
