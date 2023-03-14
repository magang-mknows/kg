import { FC, ReactElement } from "react";

const Footer: FC = (): ReactElement => {
  return (
    <div
      className="
        flex 
        flex-col
        md:flex-row
        mx-10
        my-4
        lg:my-2
        lg:mx-20 
        md:mx-10
        sm:mx-10
        xs:mx-10
        justify-between
        text-[12px]
        text-[#737373]"
    >
      <div className="dark:text-gray-400 flex justify-center text-center lg:justify-start">
        2022 - www.kampusgratis.id - Hak Cipta Dilindungi.
      </div>
      <div className="flex justify-center gap gap-x-4 text-center ">
        <div className=" hover:text-blue-400 dark:text-gray-400 xs:pb-2">
          <a href="" className="hover:text-blue-400">
            Terms of use
          </a>
        </div>
        <div className="mr-4 dark:text-gray-400">
          <a href="" className="hover:text-blue-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
