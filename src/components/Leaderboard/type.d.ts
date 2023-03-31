import { StaticImageData } from "next/image";
import { MouseEventHandler, ReactNode } from "react";

export interface PopupProfilProps {
    id?: string,
    img: string;
    score: number;
    lookup?: boolean
    name: string;
    index?: string | number;
    stylePopup?: string,
    widthModal?: string,
    onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>,
}

export interface StepLadderProps{
    avatar?: StaticImport,
    medal?: StaticImageData,
    name?: string,
    score?: number,
    styleCard?: string,
    positionImage?:string,
    styleAvatar?:string,
    styleMedal?: string,
    outlineImage?: string,
    styleName?: string,
    styleScore?: string,
}