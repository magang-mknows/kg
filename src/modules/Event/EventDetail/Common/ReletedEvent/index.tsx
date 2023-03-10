import Card from "@/components/Common/Card";
import ImageEventList from "@/assets/event-list.svg";

import { FC, ReactElement } from "react";

const RelatedEvent: FC = (): ReactElement => {
  return (
    <div>
      <section>
        <div className="flex justify-between mb-4">
          <h1 className="text-lg">Acara Serupa</h1>
          <p className="text-sm font-bold text-primary-500">Lihat Semua</p>
        </div>
        <Card
          className="bg-white p-6 rounded-lg w-[425px] h-[382px] mb-7"
          titleStyle="text-[16px]"
          src={ImageEventList}
          hasImage={true}
          imgwidth={10}
          imgheight={10}
        >
          <div className="flex flex-col pt-4 ">
            <p className="mb-2 text-lg">Webinar Cyber Security</p>
            <h1 className="text-[18px] text-red-500 mb-2 font-bold">GRATIS</h1>
            <p className="text-[14px] text-neutral-500">Tuesday, 28 February 2023 19:00 WIB</p>
          </div>
        </Card>
        <Card
          className="bg-white p-6 rounded-lg w-[425px] h-[382px] mb-7"
          titleStyle="text-[16px]"
          src={ImageEventList}
          hasImage={true}
          imgwidth={10}
          imgheight={10}
        >
          <div className="flex flex-col pt-4 ">
            <p className="mb-2 text-lg">Webinar Cyber Security</p>
            <h1 className="text-[18px] text-red-500 mb-2 font-bold">GRATIS</h1>
            <p className="text-[14px] text-neutral-500">Tuesday, 28 February 2023 19:00 WIB</p>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default RelatedEvent;
