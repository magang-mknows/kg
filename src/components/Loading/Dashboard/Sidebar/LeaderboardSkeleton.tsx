import { FC, ReactElement } from "react";

const LeaderBoardSkeleton: FC = (): ReactElement => {
  return (
    <section className="w-full bg-gray-500  mb-10 px-8 py-7 rounded-md">
      <section className="flex justify-between items-start mb-4">
        <div className="w-1/2 flex flex-col gap-2">
          <h1 className="bg-gray-200 rounded-md w-[70%] h-7 mb-2" />
          <p className="bg-gray-200 rounded-sm w-5 h-5" />
          <p className="bg-gray-200 rounded-sm w-[50%] h-5" />
        </div>
        <div className="PapanSkorLogo w-20 h-20 bg-gray-200 rounded-full" />
      </section>
      <section className="mb-6 ">
        {[...Array(5)].map((_, index) => {
          return (
            <div
              key={index}
              className="flex cursor-pointer gap-2 items-center border-t-2 border-dashed pt-4 pb-3"
            >
              <div className="Circle rounded-full h-7 w-7 bg-gray-200" />
              <div className="w-[40%]">
                <h1 className="bg-gray-200 rounded-sm w-full h-5 mb-2" />
                <p className="bg-gray-200 rounded-sm w-1/2 h-4" />
              </div>
            </div>
          );
        })}
      </section>
      <div className="Button bg-gray-200 rounded-lg h-9 w-full" />
    </section>
  );
};

export default LeaderBoardSkeleton;
