import Image from "next/image";
import { FC, ReactElement } from "react";
import { AuthLayoutTypes } from "./types";

const AuthLayouts: FC<AuthLayoutTypes> = ({
  children,
  img = "/signin.svg",
  title,
}): ReactElement => {
  return (
    <section className="w-full flex items-center h-screen dark:bg-gray-900">
      <div className="flex w-full h-screen bg-primary-500 p-6">
        <Image src={img} width={200} height={200} alt={"Auth"} />
      </div>
      <div className="bg-white flex-col gap-y-[57px] items-center justify-center flex h-screen w-full px-[110px]">
        <div className="flex flex-col w-full justify-start">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-base">{title}</p>
        </div>
        <div className="flex w-full items-center justify-center">{children}</div>
      </div>
    </section>
  );
};

export default AuthLayouts;
