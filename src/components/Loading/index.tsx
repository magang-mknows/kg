import React, { ReactElement } from "react";
import Image from "next/image";
import Loader from "@/assets/loader/loader.png";

const Loading = (): ReactElement => {
  return (
    <div
      className="flex flex-col items-center h-screen z-10 justify-center w-full p-4"
      role="status"
    >
      <div className="w-full h-full">
        <Image
          src={Loader}
          width={40}
          height={40}
          alt={"loader"}
          className={"animate-spin mx-auto mt-[20%]"}
        />
      </div>
    </div>
  );
};

export default Loading;
