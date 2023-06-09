import { FC, ReactElement } from "react";
import RelatedEvent from "../Common/ReletedEvent";

import EventCard from "../Common/EventCard";

const Information: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
      <section className="col-span-2 px">
        <h1 className="text-neutral-900 text-lg mb-5">Detail Acara</h1>
        <EventCard isOrder={true} />
        <EventCard isOrder={false} />
      </section>
      <RelatedEvent />
    </div>
  );
};

export default Information;
