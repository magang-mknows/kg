import { navbarMenu } from "@/utilities/constant";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

const BottomSection: FC = () => {
  const router = useRouter();

  return (
    <>
      <section className="lg:px-20 md:px-10 px-5 py-4 border-b-2 border-gray-100 hidden lg:block ">
        <div>
          <ul className=" flex gap-x-4">
            {navbarMenu.map((menu, index) => {
              return (
                <Link
                  href={menu.link}
                  passHref
                  key={index}
                  className={`${
                    router.pathname.includes(menu.link)
                      ? "bg-[#F8F6F2] text-gray-800 rounded-lg shadow-sm"
                      : "  hover:text-gray-800  text-[#968E7E] "
                  } px-5 py-2.5  text-base cursor-pointer transition-colors duration-300 ease-in-out font-medium`}
                >
                  <li>{menu.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default BottomSection;
