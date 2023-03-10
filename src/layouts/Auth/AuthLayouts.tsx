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
    <section className="w-full flex items-center h-screen dark:bg-gray-900">
      <div className="hidden md:flex justify-center items-center w-full h-screen bg-neutral-200 p-6">
        <Image src={img} width={600} height={600} alt={"Auth"} />
      </div>
      <div className="bg-white flex-col gap-y-[57px] items-center justify-center flex h-screen w-full md:px-[110px] px-[64px]">
        <div className="flex flex-col w-full justify-center items-center md:items-start md:justify-start gap-y-1">
          <h1 className="text-4xl font-bold text-neutral-400">{title}</h1>
          <p className="text-base text-neutral-700">{description}</p>
        </div>
        <div className="flex w-full items-center justify-center">{children}</div>
      </div>
    </section>
  );
};

export default AuthLayouts;
