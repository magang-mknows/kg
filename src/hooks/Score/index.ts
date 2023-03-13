import { CertificateStatus } from "@/stores/Score";
import { certificateTypes } from "@/stores/Score/type";
import { useRecoilState } from "recoil";

type certificateReturnTypes = {
  setCertificate: (val: Array<certificateTypes>) => void;
  getCertificate: Array<certificateTypes>;
};

export const useCertficate = (): certificateReturnTypes => {
  const [getCertificate, setCertificate] = useRecoilState(CertificateStatus);

  return {
    setCertificate: (val: Array<certificateTypes>) => setCertificate(val),
    getCertificate: getCertificate,
  };
};
