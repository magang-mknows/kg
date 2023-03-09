import { useAdministrationStatus } from "@/hooks/Administration/useAdministrationStatus";
import React, { FC, ReactElement } from "react";

const TitleAdministration: FC = (): ReactElement => {
  const { getAdministrationStatus } = useAdministrationStatus();

  return (
    <div className="title lg:px-20 px-5 w-full">
      <h1 className="text-[20px] font-[600]  text-black md:text-left">Administrasi</h1>
      {getAdministrationStatus === "none" ? <p>anda belum isi</p> : "dalam progres"}
    </div>
  );
};

export default TitleAdministration;
