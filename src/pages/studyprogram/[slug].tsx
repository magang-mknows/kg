import type { NextPage } from "next";
import { ReactElement } from "react";
import StudyProgram from "@/modules/StudyPlan/studyProgram";
import { useRouter } from "next/router";

const Detail: NextPage = (): ReactElement => {
  const { query } = useRouter();
  console.log(query.slug);
  return <StudyProgram />;
};

export default Detail;
