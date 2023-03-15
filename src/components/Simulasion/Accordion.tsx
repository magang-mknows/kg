import { FC, ReactElement, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AccordionProps } from "./type.d";
import dropdown from "@/assets/rescheduleSimulasi/dropdown.svg";

const Accordion: FC<AccordionProps> = ({
  title,
  idAccordion,
  children,
  iconImage,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState("");
  return (
    <div data-accordion="collapse" className="mb-8 mt-5">
      <h2>
        <button
          onClick={() => (isOpen == "" ? setIsOpen(`${idAccordion}`) : setIsOpen(""))}
          type="button"
          className="flex items-center justify-between w-full px-5 py-3 font-medium text-left rounded-tl-[8px] rounded-tr-[8px] shadow-md bg-white dark:bg-[#111D2D]"
        >
          <div className="flex flex-row gap-4">
            <Image src={iconImage as unknown as StaticImageData} alt={"icon-afternoon"} />
            <div className="text-[16px] font-[700] text-[#53565A] mt-2 dark:text-white">
              {title}
            </div>
          </div>
          <Image src={dropdown} alt={"accordion-image"} />
        </button>
      </h2>
      {isOpen == `${idAccordion}` ? (
        <div>
          <div className="px-6 py-3 text-[16px] font-[700] text-[#53565A] rounded-bl-[8px] rounded-br-[8px] bg-white dark:bg-[#111D2D] dark:text-[#fff] shadow-md">
            <hr />
            <div className="mt-3">{children}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Accordion;
