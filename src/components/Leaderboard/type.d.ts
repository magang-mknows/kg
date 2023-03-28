import { StaticImageData } from "next/image";
import { MouseEventHandler, ReactNode } from "react";

export interface PopupProfilProps {
    name?: string,
    point?: number,
    popupRank?: number,
    image?: StaticImageData,
    lookup?: boolean,
    semester?: string,
    major?: string
    stylePopup?: string,
    widthModal?: string,
    onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>,
}
