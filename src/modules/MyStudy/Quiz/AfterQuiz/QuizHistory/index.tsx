import { FC, ReactElement } from "react";
import HistoryCard from "./HistoryCard";

const QuizHistory: FC = (): ReactElement => {
  return (
    <div className="px-6 md:px-8 lg:px-10 w-full min-h-screen mb-20">
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </section>
    </div>
  );
};

export default QuizHistory;
