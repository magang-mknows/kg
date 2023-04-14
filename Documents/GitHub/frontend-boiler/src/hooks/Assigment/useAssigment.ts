import { assigmentState } from "@/stores/Assigment";
import { T } from "@/stores/Assigment/type";
import { useRecoilState } from "recoil";

type AssigmentTypes = {
  setAssigment: (val: Array<T>) => void;
  getAssigment: Array<T>;
};
export const useAssigment = (): AssigmentTypes => {
  const [getAssigment, setAssigment] = useRecoilState(assigmentState);
  return {
    setAssigment: (val: Array<T>) => setAssigment(val),
    getAssigment: getAssigment,
  };
};
