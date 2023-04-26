import { FC, ReactElement } from "react";

const FootbarSkeleton: FC = (): ReactElement => {
  return (
    <footer className="animate-pulse bg-neutral-200 pt-8 transition-all ease-in-out duration-300">
      <div className=" mx-6 lg:mx-20 md:mx-14 md:py-5 ">
        <div className="grid gap-10  grid-1 md:grid-cols-2 lg:grid-cols-4">
          {/* kampus gratis */}
          <div className="text-sm w-full lg:w-[360px]">
            <div className="bg-neutral-300 w-44 py-10 rounded-lg mb-4"></div>
            <p className="bg-neutral-300 w-full py-2 rounded-lg mb-2"></p>
            <p className="bg-neutral-300 w-full py-2 rounded-lg mb-2"></p>
            <p className="bg-neutral-300 w-full py-2 rounded-lg mb-2"></p>

            <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:mt-2 sm:mt-4">
              <div className="flex flex-row my-4 space-x-4">
                <div className="bg-neutral-300 rounded-lg md:w-6 md:h-6 w-5 h-5"></div>
                <div className="bg-neutral-300 rounded-lg md:w-6 md:h-6 w-5 h-5"></div>
                <div className="bg-neutral-300 rounded-lg md:w-6 md:h-6 w-5 h-5"></div>
                <div className="bg-neutral-300 rounded-lg md:w-6 md:h-6 w-5 h-5"></div>
              </div>
              <div className="mt-[6px] flex justify-end">
                <div className="bg-neutral-300 rounded-lg md:w-40 md:h-12 w-24 h-10"></div>
              </div>
            </div>
          </div>

          {/* Halaman */}
          <div className="lg:pl-[160px] text-start">
            <h6 className="bg-neutral-300 lg:w-32 w-28 py-4 rounded-lg flex"></h6>
            <p className="bg-neutral-300 lg:w-full w-20 py-2 rounded-lg mb-2 mt-8"></p>
            <p className="bg-neutral-300 lg:w-full w-20 py-2 rounded-lg mb-2"></p>
            <p className="bg-neutral-300 lg:w-full w-20 py-2 rounded-lg mb-2"></p>
          </div>

          {/* Kontak */}
          <div className="lg:pl-[40px] text-start">
            <h6 className="bg-neutral-300 lg:w-32 w-28 py-4 rounded-lg mb-4 flex md:justify-start "></h6>
            <p className="bg-neutral-300 lg:w-full w-44 py-2 rounded-lg  mb-2 mt-8"></p>
            <p className="bg-neutral-300 lg:w-full w-44 py-2 rounded-lg  mb-2"></p>
          </div>

          {/* Alamat */}
          <div className="text-start">
            <h6 className="bg-neutral-300 lg:w-32 w-28 py-4 rounded-lg mb-4 md:justify-start"></h6>
            <h6 className="bg-neutral-300 w-full py-3 rounded-lg md:justify-start"></h6>
            <div className="flex flex-col mb-2 mt-2 lg:text-[14px]">
              <h6 className="bg-neutral-300 w-full py-2 rounded-lg md:justify-start mb-2"></h6>
              <h6 className="bg-neutral-300 w-64 py-2 rounded-lg md:justify-start mb-2 mx-12"></h6>
              <h6 className="bg-neutral-300 w-64 py-2 rounded-lg md:justify-start mx-12"></h6>
            </div>
            <div className="flex flex-col mb-2 mt-2 lg:text-[14px]">
              <h6 className="bg-neutral-300 w-full py-2 rounded-lg md:justify-start mb-2"></h6>
              <h6 className="bg-neutral-300 w-64 py-2 rounded-lg md:justify-start mb-2 mx-12"></h6>
              <h6 className="bg-neutral-300 w-64 py-2 rounded-lg md:justify-start mx-12"></h6>
            </div>
          </div>
        </div>
      </div>

      <hr className="py-5  lg:mx-10 md:mx-8 md:py-2 mx-6" />
    </footer>
  );
};

export default FootbarSkeleton;
