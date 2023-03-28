import { FC, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "@/components/Common/Modal";
import { PopupProfilProps } from "./type";

const PopupProfil: FC<PopupProfilProps> = ({
  name,
  point,
  popupTitle,
  image,
  lookup,
  onClose,
  children,
  stylePopup,
  widthModal,
}): ReactElement => {
  return (
    <Modal lookup={lookup as boolean} withClose={true} widthModal={widthModal}>
      {children}
    </Modal>
  );
};

export default PopupProfil;
