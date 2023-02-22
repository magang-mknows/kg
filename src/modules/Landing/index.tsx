import { FC, ReactElement } from "react";
import BaseLayouts from "@/layouts/Base";
import Image from "next/image";
import Button from "@/components/Common/Button";
import MainLayouts from "@/layouts/Main";
import ContentLayouts from "@/layouts/Content";

const Landing: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <MainLayouts>
        <ContentLayouts>
          <h1>Test Drive</h1>
        </ContentLayouts>
        <ContentLayouts>
          <h1>Test Drive</h1>
        </ContentLayouts>
      </MainLayouts>
    </BaseLayouts>
  );
};

export default Landing;
