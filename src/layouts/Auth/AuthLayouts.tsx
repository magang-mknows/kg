import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { AuthLayoutTypes } from "./types";
import { LoadConditionalLogo } from "@/utilities/helper";

const AuthLayouts: FC<AuthLayoutTypes> = ({
  title,
  children,
  description,
  linkText,
  to,
  img = "/signin.svg",
}): ReactElement => {
  return (
    <section className="bg-gray-50 w-full flex items-center h-screen dark:bg-gray-900">
      <div className="flex w-full flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full gap-x-8 justify-between md:max-w-[70%] flex bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 hidden lg:block w-full">
            <Image src={`${img}`} width={600} height={600} quality="100" alt="auth-image" />
          </div>
          <div className="p-6 w-full space-y-4 md:space-y-6 sm:p-8">
            <Image src={LoadConditionalLogo()} width={130} height={130} quality="100" alt="login" />
            <h1 className="text-xl font-bold text-gray-900 md:text-4xl dark:text-white">{title}</h1>
            <p className="dark:text-white text-gray-600">
              {description}{" "}
              <Link className="text-blue-600" href={`${to}`}>
                {linkText}
              </Link>
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayouts;
