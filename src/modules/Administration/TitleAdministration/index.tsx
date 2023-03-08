import MainLayouts from "@/layouts/Main";
import React, { FC, ReactElement } from "react";

const TitleAdministration: FC = (): ReactElement => {
  return (
    <div className="title px-[70px] w-full">
      <h1 className="text-[20px] font-[600] ml-2 text-black md:text-left text-center">
        Administrasi
      </h1>
    </div>
  );
};

export default TitleAdministration;
