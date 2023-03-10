import type { NextPage } from "next";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import EventList from "@/modules/Event/EvenList";

const Detail: NextPage = (): ReactElement => {
  const { query } = useRouter();
  console.log(query.slug);
  return <EventList />;
};

export default Detail;
