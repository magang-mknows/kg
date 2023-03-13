import type { NextPage } from "next";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import EventDetail from "@/modules/Event/EventDetail";

const Detail: NextPage = (): ReactElement => {
  const { query } = useRouter();
  console.log(query.slug);
  return <EventDetail />;
};

export default Detail;
