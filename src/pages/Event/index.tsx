import EventList from "@/modules/Event/EvenList";
import EventDetail from "@/modules/Event/EventDetail";
import { FC, Fragment, ReactElement } from "react";

const Index: FC = (): ReactElement => {
  return (
    <Fragment>
      <EventList />
      <EventDetail />
    </Fragment>
  );
};

export default Index;
