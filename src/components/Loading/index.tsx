import React, { ReactElement } from "react";
import Image from "next/image";
import Loader from "@/assets/loader/loader.png";

const Loading = (): ReactElement => {
  return (
    <div className="flex items-center h-screen z-10 justify-center w-full" role="status">
      <Image
        src={Loader}
        width={40}
        height={40}
        alt={"loader"}
        className={"animate-spin mx-auto mt-[20%]"}
      />
    </div>
  );
};

export default Loading;
