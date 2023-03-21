import { chooseSidebar } from "@/stores/MyStudy/Discussion";
import { useRecoilState } from "recoil";

type ChooseSidebar = {
    setChoose: (val:string)=> void;
    getChoose: string;
}

export const useChooseSidebar = (): ChooseSidebar => {
    const [getChoose, setChoose] = useRecoilState(chooseSidebar);
    return{
        setChoose: (val:string)=>setChoose(val),
        getChoose: getChoose,
    };
};