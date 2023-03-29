import { InformationState } from "@/stores/Landing";
import { StaticImageData } from "next/image";
import { useRecoilState } from "recoil";

type InformationReturnTypes = {
  setInformation: (val: Array<Info>) => void;
  getInformation: Array<Info>;
};

type Info = {
  image: StaticImageData;
  deskripsi: string;
  judul: string;
  tag: string;
};

export const useInformation = (): InformationReturnTypes => {
  const [getInformation, setInformation] = useRecoilState(InformationState);
  return {
    setInformation: (val: Array<Info>) => setInformation(val),
    getInformation: getInformation,
  };
};
