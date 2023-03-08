import { useRecoilState } from "recoil";
import { JobInformationState } from "@/stores/Administration";

type ReturnTypes = {
    setJobStatus: (val: boolean) => void;
    getJobStatus: boolean;
};

export const useJobInformationStatus = (): ReturnTypes => {
    const [get, set] = useRecoilState(JobInformationState);
    return {
        setJobStatus: (val: boolean) => set(val),
        getJobStatus: get,
    };
};

