import { FC, ReactElement } from "react";

const UpperSectionSkeleton: FC = (): ReactElement => {
  return (
    <section className="flex items-center h-[72px] justify-between border-b-2 px-6 md:px-8 lg:px-10  border-neutral-100 dark:border-[#373a3e4a]">
      <div className="w-[60px] md:w-[65px] lg:w-[83px] h-9 bg-gray-200 rounded-md" />
      <section className="flex items-center gap-2 md:gap-3 ">
        {/* Mobile Menu Skeleton */}
        <div className="bg-gray-200 rounded-md theme-toggle h-9 w-9"></div>
        <div className="bg-gray-200 rounded-md theme-toggle h-9 w-9"></div>

        {/* before login */}
        <div className="hidden lg:block py-2 text-transparent bg-gray-200 rounded-md px-[18px]">
          Masuk
        </div>
        <div className="hidden lg:block px-[18px] py-2 text-transparent bg-gray-200 rounded-md">
          Daftar
        </div>
      </section>
    </section>
  );
};

export default UpperSectionSkeleton;
