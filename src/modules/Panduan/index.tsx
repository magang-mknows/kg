import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import MainLayouts from "@/layouts/Content";

const Panduan: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <MainLayouts>
        <h1>Panduan</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quisquam? Autem
          eveniet illo aliquam omnis? Corporis, quos saepe beatae velit alias a. Nobis mollitia
          labore cumque quidem blanditiis facere cum!
        </p>
      </MainLayouts>
    </BaseLayouts>
  );
};

export default Panduan;
