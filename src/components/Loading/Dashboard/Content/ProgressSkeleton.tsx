import { FC, ReactElement } from "react";
import { MdExpandMore } from "react-icons/md";

const ProgressSkeleton: FC = (): ReactElement => {
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

export default ProgressSkeleton;
