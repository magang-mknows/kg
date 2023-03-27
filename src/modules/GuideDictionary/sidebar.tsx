import React, { ReactElement } from "react";
import Card from "@/components/Common/Card";
import { useGuideVideo } from "@/hooks/Guide/useGuideDictionary";

const Sidebar = (): ReactElement => {
  const { getGuideDictionary } = useGuideVideo();
  return (
    <div className="px-6 md:px-8 lg:px10 mb-10">
      <h1 className=" text-[20px] font-[700] mb-2">Kamus Populer </h1>
      <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-2 lg:gap-0 md:gap-4">
        {getGuideDictionary.map((dummy, i) => {
          return (
            <Card
              key={i}
              href={`/panduan/kamus-kampus-gratis/${dummy.id}`}
              hasImage={false}
              title={dummy.title}
              titleStyle="font-bold text-[16px]"
              className="bg-[#F5F5F5] dark:bg-[#232529] rounded-lg max-w-xs my-2 min-h-[90%] "
            >
              <p className="text-[12px] font-normal ">{dummy.description?.substring(0, 90)}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
