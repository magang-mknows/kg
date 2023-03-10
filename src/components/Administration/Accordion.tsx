import { FC, ReactElement, useState } from "react";
import accordionIcon from "@/assets/accordion-icon.svg";
import Image from "next/image";
import { AccordionProps } from "./type.d";

const Accordion: FC<AccordionProps> = ({
  title,
  idAccordion,
  children,
  disabled,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState("");
  return (
    <div data-accordion="collapse" className="mb-8">
      <h2>
        <button
          onClick={() => (isOpen == "" ? setIsOpen(`${idAccordion}`) : setIsOpen(""))}
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left rounded-xl  bg-[#F5F5F5]"
          disabled={disabled}
        >
          <div className="text-[16px] font-[500] text-[#262626]">{title}</div>
          <Image src={accordionIcon} alt={"accordion-image"} />
        </button>
      </h2>
      {isOpen == `${idAccordion}` ? (
        <div>
          <div className="p-6 text-[14px] font-[400 text-[#262626] dark:text-[#fff]">
            {children}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Accordion;
