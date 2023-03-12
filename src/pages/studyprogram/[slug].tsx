import type { NextPage } from "next";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import StudyProgram from "@/modules/StudyPlan/StudyProgram";

const Detail: NextPage = (): ReactElement => {
  const { query } = useRouter();
  console.log(query.slug);
  return <StudyProgram />;
};

export default Detail;
