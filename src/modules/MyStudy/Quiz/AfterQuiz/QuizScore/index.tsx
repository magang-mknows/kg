import { FC, ReactElement } from "react";

import DetailCard from "./DetailCard";
import BaseLayouts from "@/layouts/Base";
import Score from "./Score";
import NavigationControl from "./NavigationControl";

const QuizScore: FC = (): ReactElement => {
  return (
    <BaseLayouts className="w-full dark:!bg-[#222529]">
      <div className="px-6 md:px-8 lg:px-16 xl:px-40 py-14 w-full flex flex-col  min-h-screen">
        <section className="bg-primary-600-500 w-full py-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 items-center justify-center">
          <Score />
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 ">
            <DetailCard type="trueAnswer" value="9" />
            <DetailCard type="falseAnswer" value="1" />
            <DetailCard type="timeFinished" value="7 Hari 7 Malam" />
            <DetailCard type="totalQuestions" value="10" />
          </div>
        </section>
        <section className=" w-full flex justify-center gap-y-5 lg:justify-end mt-10 flex-wrap lg:flex-nowrap gap-x-5 ">
          <NavigationControl />
        </section>
      </div>
    </BaseLayouts>
  );
};

export default QuizScore;
