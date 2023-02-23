import { FC, ReactElement } from "react";
import MainLayouts from "@/layouts/Main";
import ContentLayouts from "@/layouts/Content";

const HeroSection: FC = (): ReactElement => {
  return (
    <MainLayouts>
      <ContentLayouts>
        <h1>Hero Section</h1>
      </ContentLayouts>
      <ContentLayouts>
        <h1>Test Drive</h1>
      </ContentLayouts>
    </MainLayouts>
  );
};

export default HeroSection;
