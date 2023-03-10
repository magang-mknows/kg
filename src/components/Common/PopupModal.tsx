import { FC, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "./Modal";
import { PopupModalProps } from "./types";

const PopupModal: FC<PopupModalProps> = ({
  popupTitle,
  description,
  icon,
  image,
  lookup,
  onClose,
  children,
  className,
}): ReactElement => {
  return (
    <Modal lookup={lookup as boolean} onClose={onClose}>
      <div
        className={`flex flex-col items-center justify-center w-full py-10 text-center ${className}`}
      >
        {icon ? (
          <>
            <Image src={icon as StaticImageData} height={55.7} width={55.7} alt="Popup-Image" />
            <Image
              src={image as StaticImageData}
              height={280.75}
              width={280.75}
              alt="Popup-Image"
            />
          </>
        ) : (
          <Image
            src={image as StaticImageData}
            className={"w-full"}
            height={280.75}
            width={280.75}
            alt="Popup-Image"
          />
        )}
        <h1 className="my-4 font-bold text-[23.4px]">{popupTitle}</h1>
        <h5 className="font-medium text-[20.05px] text-[#A3A3A3]">{description}</h5>
        {children}
      </div>
    </Modal>
  );
};

export default PopupModal;
