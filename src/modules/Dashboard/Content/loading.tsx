import { FC, ReactElement } from "react";
import { MdExpandMore } from "react-icons/md";

export const ProgressSkeleton: FC = (): ReactElement => {
  return (
    <section className="bg-gray-500 w-full pt-[28px] px-[24px] rounded-md pb-[44px] mb-[48px]">
      <p className="bg-gray-400 h-6 w-1/3 mb-[8px] rounded-md" />
      <p className="bg-gray-400 h-4 w-[100px] rounded-sm" />
      <div className="wrapper mt-5 grid gap-y-[20px] mb-[20px]">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="progressBox bg-gray-400 w-full relative grid grid-cols-12 gap-x-4 gap-y-[20px] rounded-lg px-5 py-5"
          >
            <div className="Image bg-gray-200 lg:col-span-2 rounded-lg w-[100px] h-[100px] object-cover md:col-span-12 col-span-12" />
            <div className=" lg:col-span-10 lg:flex lg:justify-between items-center w-full col-span-12">
              <div className="w-full">
                <p className="bg-gray-200 mb-[12px] w-[200px] h-5 rounded-md" />
                <p className="bg-gray-200 mb-[17px] mt-0 w-[150px] h-4 rounded-sm" />
                <div className="flex gap-3">
                  <div className="bg-gray-200 w-[200px] md:w-[300px] rounded-lg h-3 mt-0 mr-[12px] mb-0" />
                  <p className="bg-gray-200 inline mt-0 h-3 w-[100px] rounded-sm" />
                </div>
              </div>
              <div className="Button bg-gray-200 h-[10px] px-6 py-3 lg:w-[200px] rounded-md w-full" />
            </div>
          </div>
        ))}

        <div className="mx-auto flex flex-col items-center">
          <p className="bg-gray-200 w-20 h-3 rounded-sm" />
          <div className="text-[40px]">
            <MdExpandMore color="#e5e7eb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const TaskEventCarouselSkeleton: FC = (): ReactElement => {
  return (
    <div className="bg-gray-500 p-7 rounded-md shadow-sm w-full overflow-hidden">
      <div className="w-full flex flex-col gap-y-4">
        <div className="w-full flex justify-between">
          <div className="w-full flex flex-col gap-2">
            <span className="bg-gray-200 rounded-md h-6 w-1/4" />
            <span className="bg-gray-200 rounded-md h-4 w-1/3" />
          </div>
          <div className="flex gap-1">
            <span className="bg-gray-200 rounded-full h-2 w-2" />
            <span className="bg-gray-200 rounded-full h-2 w-6" />
            <span className="bg-gray-200 rounded-full h-2 w-2" />
          </div>
        </div>
        <div className="w-full grid grid-cols-[90px_1fr] gap-4">
          <span className="bg-gray-200 rounded-md h-[110px] w-[90px]" />
          <div className="flex flex-col justify-center gap-3">
            <span className="bg-gray-200 rounded-sm h-5 w-[90%]" />
            <span className="bg-gray-200 rounded-sm h-4 w-[70%]" />
            <span className="bg-gray-200 rounded-sm h-4 w-[80%]" />
          </div>
        </div>
        <div className="w-full flex gap-4 items-center">
          <span className="bg-gray-200 rounded-md h-10 w-full md:w-[40%]" />
          <span className="bg-gray-200 rounded-sm h-5 w-full md:w-[55%]" />
        </div>
      </div>
    </div>
  );
};

export const MyCalendarSkeleton: FC = (): ReactElement => {
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
