import { StaticImageData } from "next/image";
import { MouseEventHandler, ReactNode } from "react";

export interface PopupProfilProps {
    name?: string,
    point?: number,
    popupTitle?: string,
    image?: StaticImageData,
    lookup?: boolean,
    onClose?: boolean,
    children?: ReactNode,
    stylePopup?: string,
    widthModal?: string,
    onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>,
}
