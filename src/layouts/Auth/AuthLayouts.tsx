import SuspenseError from "@/modules/Common/SuspenseError";
import Image from "next/image";
import { FC, ReactElement } from "react";
import { AuthLayoutTypes } from "./types";

const AuthLayouts: FC<AuthLayoutTypes> = ({
  children,
  img = "/signin.svg",
  title,
  description,
}): ReactElement => {
  return (
    <section className="w-full bg-gray-100 flex items-center lg:p-16 md:p-8 sm:p-6 p-4 h-screen dark:bg-gray-900">
      <section className="flex items-center bg-white w-full h-auto rounded-lg">
        <div className="hidden lg:flex justify-center items-center w-full h-auto p-6">
          <SuspenseError>
            <Image src={img} width={600} height={600} loading="eager" alt={"Auth"} />
          </SuspenseError>
        </div>
        <div className="flex-col md:gap-y-[57px] gap-y-6 items-center justify-center p-6 flex h-auto w-full">
          <div className="flex flex-col w-full justify-center items-center md:items-start md:justify-start gap-y-1">
            <h1 className="md:text-4xl text-2xl font-bold text-neutral-900">{title}</h1>
            <p className="text-base text-neutral-700 text-center md:text-left">{description}</p>
          </div>
          <div className="flex w-full items-center justify-center">{children}</div>
        </div>
      </section>
    </section>
  );
};

export default AuthLayouts;
