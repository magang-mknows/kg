import React, { ReactElement } from "react";
import Card from "@/components/Common/Card";

const Siderbar = (): ReactElement => {
  return (
    <div className="flex flex-col px-6 md:px-8 lg:px10 mt-[30px] mb-[50px]">
      <h1 className=" text-[50px] font-[700]">Buku panduan </h1>
      <Card
        hasImage={false}
        title="KRS"
        titleStyle="font-bold text-[16px]"
        className="bg-neutral-200 rounded-lg max-w-xs"
      >
        <p className="text-[12px] font-normal ">
          SKS adalah singkatan dari satuan kredit semester. Sistem SKS ini digunakan umumnya di
          perguruan tinggi.
        </p>
      </Card>
    </div>
  );
};

export default Siderbar;
