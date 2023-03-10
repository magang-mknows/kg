import type { NextPage } from "next";
import { ReactElement } from "react";
import ContractStudy from "@/modules/StudyPlan/contractStudy";
import { useRouter } from "next/router";

const Detail: NextPage = (): ReactElement => {
  const { query } = useRouter();
  console.log(query.slug);
  return <ContractStudy />;
};

export default Detail;
