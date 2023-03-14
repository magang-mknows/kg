import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement } from "react";
import AfterQuiz from "./Quiz/AfterQuiz";

const StudikuModule: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <AfterQuiz />
    </BaseLayouts>
  );
};

export default StudikuModule;
