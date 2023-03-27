import { discussionSidebar } from "@/stores/MyStudy/Discussion";
import { useRecoilState } from "recoil";
import {Sidebar} from "@/stores/MyStudy/Discussion/type";

type DiscussionTypes ={
    setDiscussion: (val: Array<Sidebar>) => void;
    getDiscussion: Array<Sidebar>;
}

export const useSidebar = (): DiscussionTypes => {
    const [getDiscussion, setDiscussion] = useRecoilState(discussionSidebar);
   return{
    setDiscussion: (val: Array<Sidebar>) => setDiscussion(val),
    getDiscussion: getDiscussion,
   };
};